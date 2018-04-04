import { CashMachineResponse } from "./cashMachineResponse";

/**
 * Main application class
 * 
 * @class CashMachine
 */
class CashMachine {
    private static instance: CashMachine;
    private availableNotes: number[] = [100.00, 50.00, 20.00, 10.00];


    /**
     * Singleton implementation
     * 
     * @static
     * @returns 
     * @memberof CashMachine
     */
    static getInstance() {
        if (!CashMachine.instance) {
            CashMachine.instance = new CashMachine();
        }
        return CashMachine.instance;
    }


    /**
     * Main method
     * 
     * @param {number} entry 
     * @returns {CashMachineResponse} 
     * @memberof CashMachine
     */
    deliverNotes(entry: number): CashMachineResponse {
        console.log(`Entry: ${entry}`);
        try {
            // checking the entry for incorrect data
            this.checkEntry(entry);
            // getting notes list for the entry
            let notesToGet = this.getNotes(entry);
            console.log(`Result: ${notesToGet}`);
            return new CashMachineResponse(false, notesToGet, '');
        } catch (ex) {
            console.error(`Result: ${ex}`);
            return new CashMachineResponse(true, [], ex);
        }
    }


    /**
     * Checking the entry for incorrect data
     * 
     * @private
     * @param {number} entry 
     * @memberof CashMachine
     */
    private checkEntry(entry: number): void {
        // checking inccorect time for the entry
        if (typeof entry !== 'number') {
            throw 'Empty Set';
        }
        // checking for invalid argument exception
        if (entry < 0) {
            throw 'InvalidArgumentException';
        }
        // checking is there opportunity to find notes for the entry (using the smallest note to check)
        var lowestNote = this.availableNotes.filter(n => entry % n === 0);
        // checking for note unavailable exception
        if (lowestNote.length === 0) {
            throw 'NoteUnavailableException';
        }
    }


    /**
     * Getting notes list for the entry
     * 
     * @private
     * @param {number} entry 
     * @returns {number[]} 
     * @memberof CashMachine
     */
    private getNotes(entry: number): number[] {
        let notes: number[] = [];
        // loop through available notes list
        for (let i = 0; i < this.availableNotes.length; i++) {
            // determine how many current notes can be used
            var currentNotesToGet: number = entry / this.availableNotes[i];
            for (let j = 1; j <= currentNotesToGet; j++) {
                notes.push(this.availableNotes[i]);
                // reduce entry amount
                entry -= this.availableNotes[i];
            }
        }
        return notes;
    }
}

export { CashMachine };