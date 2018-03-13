"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TSConsoleReporter = require("jasmine-ts-console-reporter");
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new TSConsoleReporter());
