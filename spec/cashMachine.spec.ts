import { CashMachine } from "../src/cashMachine";

describe("Cash Machine tests", function () {
    it("Test #1: entry = 30", function () {
        let entry = 30;
        let result = CashMachine.getInstance().deliverNotes(entry);
        let expectedResult: number[] = [20, 10];
        expect(false).toBe(result.error);
        expect(expectedResult).toEqual(result.notes);
    });

    it("Test #2: entry = 80 test", function () {
        let entry = 80;
        let result = CashMachine.getInstance().deliverNotes(entry);
        let expectedResult: number[] = [50, 20, 10];
        expect(false).toBe(result.error);
        expect(expectedResult).toEqual(result.notes);
    });

    it("Test #3: NoteUnavailableException", function () {
        let entry = 125;
        let result = CashMachine.getInstance().deliverNotes(entry);
        let expectedResult = 'NoteUnavailableException';
        expect(true).toBe(result.error);
        expect(expectedResult).toBe(result.message);
    });

    it("Test #4: InvalidArgumentException", function () {
        let entry = -130;
        let result = CashMachine.getInstance().deliverNotes(entry);
        let expectedResult = 'InvalidArgumentException';
        expect(true).toBe(result.error);
        expect(expectedResult).toBe(result.message);
    });

    it("Test #5: Null entry", function () {
        let entry = null;
        let result = CashMachine.getInstance().deliverNotes(entry);
        let expectedResult = 'Empty Set';
        expect(true).toBe(result.error);
        expect(expectedResult).toBe(result.message);
    });

    it("Test #6: NoteUnavailableException", function () {
        let entry = 1;
        let result = CashMachine.getInstance().deliverNotes(entry);
        let expectedResult = 'NoteUnavailableException';
        expect(true).toBe(result.error);
        expect(expectedResult).toBe(result.message);
    });

    it("Test #7: entry = 300", function () {
        let entry = 300;
        let result = CashMachine.getInstance().deliverNotes(entry);
        let expectedResult: number[] = [100, 100, 100];
        expect(false).toBe(result.error);
        expect(expectedResult).toEqual(result.notes);
    });
});