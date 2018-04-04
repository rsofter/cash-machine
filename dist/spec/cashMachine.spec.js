"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cashMachine_1 = require("../src/cashMachine");
describe("Cash Machine tests", function () {
    it("Test #1: entry = 30", function () {
        var entry = 30;
        var result = cashMachine_1.CashMachine.getInstance().deliverNotes(entry);
        var expectedResult = [20, 10];
        expect(false).toBe(result.error);
        expect(expectedResult).toEqual(result.notes);
    });
    it("Test #2: entry = 80 test", function () {
        var entry = 80;
        var result = cashMachine_1.CashMachine.getInstance().deliverNotes(entry);
        var expectedResult = [50, 20, 10];
        expect(false).toBe(result.error);
        expect(expectedResult).toEqual(result.notes);
    });
    it("Test #3: NoteUnavailableException", function () {
        var entry = 125;
        var result = cashMachine_1.CashMachine.getInstance().deliverNotes(entry);
        var expectedResult = 'NoteUnavailableException';
        expect(true).toBe(result.error);
        expect(expectedResult).toBe(result.message);
    });
    it("Test #4: InvalidArgumentException", function () {
        var entry = -130;
        var result = cashMachine_1.CashMachine.getInstance().deliverNotes(entry);
        var expectedResult = 'InvalidArgumentException';
        expect(true).toBe(result.error);
        expect(expectedResult).toBe(result.message);
    });
    it("Test #5: Null entry", function () {
        var entry = null;
        var result = cashMachine_1.CashMachine.getInstance().deliverNotes(entry);
        var expectedResult = 'Empty Set';
        expect(true).toBe(result.error);
        expect(expectedResult).toBe(result.message);
    });
    it("Test #6: NoteUnavailableException", function () {
        var entry = 1;
        var result = cashMachine_1.CashMachine.getInstance().deliverNotes(entry);
        var expectedResult = 'NoteUnavailableException';
        expect(true).toBe(result.error);
        expect(expectedResult).toBe(result.message);
    });
    it("Test #7: entry = 300", function () {
        var entry = 300;
        var result = cashMachine_1.CashMachine.getInstance().deliverNotes(entry);
        var expectedResult = [100, 100, 100];
        expect(false).toBe(result.error);
        expect(expectedResult).toEqual(result.notes);
    });
});
