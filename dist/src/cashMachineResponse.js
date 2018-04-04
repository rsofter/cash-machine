"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Response class to store an error, delivered notes list and message (in case of an error)
 *
 * @class CashMachineResponse
 */
var CashMachineResponse = /** @class */ (function () {
    /**
     * Creates an instance of CashMachineResponse.
     * @param {boolean} error
     * @param {number[]} notes
     * @param {string} message
     * @memberof CashMachineResponse
     */
    function CashMachineResponse(error, notes, message) {
        this.error = error;
        this.notes = notes;
        this.message = message;
    }
    return CashMachineResponse;
}());
exports.CashMachineResponse = CashMachineResponse;
