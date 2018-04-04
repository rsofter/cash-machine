"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cashMachineResponse_1 = require("./cashMachineResponse");
/**
 * Main application class
 *
 * @class CashMachine
 */
var CashMachine = /** @class */ (function () {
    function CashMachine() {
        this.availableNotes = [100.00, 50.00, 20.00, 10.00];
    }
    /**
     * Singleton implementation
     *
     * @static
     * @returns
     * @memberof CashMachine
     */
    CashMachine.getInstance = function () {
        if (!CashMachine.instance) {
            CashMachine.instance = new CashMachine();
        }
        return CashMachine.instance;
    };
    /**
     * Main method
     *
     * @param {number} entry
     * @returns {CashMachineResponse}
     * @memberof CashMachine
     */
    CashMachine.prototype.deliverNotes = function (entry) {
        console.log("Entry: " + entry);
        try {
            // checking the entry for incorrect data
            this.checkEntry(entry);
            // getting notes list for the entry
            var notesToGet = this.getNotes(entry);
            console.log("Result: " + notesToGet);
            return new cashMachineResponse_1.CashMachineResponse(false, notesToGet, '');
        }
        catch (ex) {
            console.error("Result: " + ex);
            return new cashMachineResponse_1.CashMachineResponse(true, [], ex);
        }
    };
    /**
     * Checking the entry for incorrect data
     *
     * @private
     * @param {number} entry
     * @memberof CashMachine
     */
    CashMachine.prototype.checkEntry = function (entry) {
        // checking inccorect time for the entry
        if (typeof entry !== 'number') {
            throw 'Empty Set';
        }
        // checking for invalid argument exception
        if (entry < 0) {
            throw 'InvalidArgumentException';
        }
        // checking is there opportunity to find notes for the entry (using the smallest note to check)
        var lowestNote = this.availableNotes.filter(function (n) { return entry % n === 0; });
        // checking for note unavailable exception
        if (lowestNote.length === 0) {
            throw 'NoteUnavailableException';
        }
    };
    /**
     * Getting notes list for the entry
     *
     * @private
     * @param {number} entry
     * @returns {number[]}
     * @memberof CashMachine
     */
    CashMachine.prototype.getNotes = function (entry) {
        var notes = [];
        // loop through available notes list
        for (var i = 0; i < this.availableNotes.length; i++) {
            // determine how many current notes can be used
            var currentNotesToGet = entry / this.availableNotes[i];
            for (var j = 1; j <= currentNotesToGet; j++) {
                notes.push(this.availableNotes[i]);
                // reduce entry amount
                entry -= this.availableNotes[i];
            }
        }
        return notes;
    };
    return CashMachine;
}());
exports.CashMachine = CashMachine;
