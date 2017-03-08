jQuery.sap.declare("com.demoannotation_test.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("com.demoannotation_test.Component", {
	metadata: {
		"manifest": "json"
	}
});