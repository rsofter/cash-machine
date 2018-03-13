# cash-machine

## Description

The application uses TypeScript for source code, Jasmine for tests and NodeJS for API method. All TypeScript files compiles into _dist_ folder. Jasmine tests are located in _spec_ folder.

The main class is **CashMachine** in cashMachine.ts. The class uses Singleton implementation to prevent multiply instances creation.

The API method returns **CashMachineResponse** object as JSON:
- error (_true_ - there is an exception, _false_ - there is no exception)
- notes (array of delivered notes for a client)
- message (an exception's name)

## Prerequisites
Install node modules `npm install`

## Using
### Run Jasmine tests
`npm test`
### NodeJS API
1. Run NodeJS Server
```
node server.js
```
2. Run API method
```
http://localhost:3000/api/deliverNotes/[entry]
```
Example:
```
http://localhost:3000/api/deliverNotes/80
```
Output:
```
{"error":false,"notes":[50,20,10],"message":""}
```
