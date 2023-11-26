const cds = require("@sap/cds");

class ProcessorService extends cds.ApplicationService {

    /** Registering custom event handlers */

    init() {
        this.before("UPDATE", "Incidents", (req) => {
            this.onUpdate(req);
        });

        this.before("CREATE", "Incidents", (req) => {
            this.changeUrgencyDueToSubject(req.data);
        });

        return super.init();
    }

    changeUrgencyDueToSubject(data) {
        if (data) {
            const incidents = Array.isArray(data) ? data : [data];
            incidents.forEach((incident) => {
                if (incident.title?.toLowerCase().includes("urgent")) {
                    incident.urgency = { code: "H", descr: "High" }
                }
            });
        }
    }

    async onUpdate(req) {

        // Projection functions
        const oData = await SELECT.one(req.subject,
            i => {
                i`.*`, // Select all
                    i.status(s => { // Selection association of Status
                        s`.*`
                    }),
                    i.conversations(c => {
                        c`.*`
                    })
            }).where({ ID: req.data.ID });
        if (oData.status_code === 'C') {
            return req.reject(`Can't modify a closed incident`);
        }
    }
}

module.exports = ProcessorService;