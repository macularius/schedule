import { App } from "./application/kernel/app";

var app = new App();

webix.ready(function() {
    app.init();
    app.run();
});