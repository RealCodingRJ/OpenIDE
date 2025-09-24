"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var Extras_1 = require("../extras/Extras");
var child_process_1 = require("child_process");
function getCodeIDE() {
    (0, child_process_1.exec)("code .", function (error, stdout, stderr) {
        if (error) {
            console.log(error);
        }
    });
}
function getTypeIDE() {
    var arraysIDE = ["Code", "Webstorm"];
    arraysIDE.map(function (e) {
        if (e.startsWith("Code")) {
            getCodeIDE();
        }
    });
}
var IntroMessage = /** @class */ (function () {
    function IntroMessage(message) {
        this.message = message;
    }
    IntroMessage.prototype.getMessage = function () {
        return this.message;
    };
    return IntroMessage;
}());
function main() {
    var messageWelcome = new IntroMessage("| Welcome to OpenIDE |");
    console.log(messageWelcome.getMessage());
    var message = new Extras_1.IDE("| Enter Type: |");
    var command = (0, readline_sync_1.question)(message.getTypesCommad());
    if (command.startsWith("Code")) {
        getTypeIDE();
        console.log("You Chose: " + message.getTypesCommad());
    }
}
main();
