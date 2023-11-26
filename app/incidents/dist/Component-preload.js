//@ui5-bundle ns/incidents/Component-preload.js
sap.ui.require.preload({
	"ns/incidents/Component.js":function(){
"use strict";sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";var n=e.extend("ns.incidents.Component",{metadata:{manifest:"json"}});return n});
},
	"ns/incidents/i18n/i18n.properties":'# This is the resource bundle for ns.incidents\r\n\r\n#Texts for manifest.json\r\n\r\n#XTIT: Application name\r\nappTitle=Incident-Management\r\n\r\n#YDES: Application description\r\nappDescription=A Fiori application.\r\n\r\nflpTitle=Incident Management\r\n',
	"ns/incidents/manifest.json":'{"_version":"1.58.0","sap.app":{"id":"ns.incidents","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.11.3","toolsId":"3b385a2f-13f0-42fc-be7d-6477ce07ea13"},"dataSources":{"mainService":{"uri":"odata/v4/processor/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"incidents-display":{"semanticObject":"incidents","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ns.incidents.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"routes":[{"pattern":":?query:","name":"IncidentsList","target":"IncidentsList"},{"pattern":"Incidents({key}):?query:","name":"IncidentsObjectPage","target":"IncidentsObjectPage"}],"targets":{"IncidentsList":{"type":"Component","id":"IncidentsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Incidents","variantManagement":"Page","navigation":{"Incidents":{"detail":{"route":"IncidentsObjectPage"}}},"initialLoad":"Enabled","controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"IncidentsObjectPage":{"type":"Component","id":"IncidentsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Incidents","controlConfiguration":{"conversations/@com.sap.vocabularies.UI.v1.LineItem#Conversations":{"tableSettings":{"type":"ResponsiveTable","creationMode":{"createAtEnd":true}}}}}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"incidents"}}'
});
//# sourceMappingURL=Component-preload.js.map
