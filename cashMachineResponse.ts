
/**
 * Response class to store an error, delivered notes list and message (in case of an error)
 * 
 * @class CashMachineResponse
 */
class CashMachineResponse {

    /**
     * Creates an instance of CashMachineResponse.
     * @param {boolean} error 
     * @param {number[]} notes 
     * @param {string} message 
     * @memberof CashMachineResponse
     */
    constructor(public error: boolean, public notes: number[], public message: string) {
    }
}

export { CashMachineResponse };