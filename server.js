// Base server setup
var cashMachineModule = require("./dist/src/cashMachine"),
    express = require("express"),
    cashMachineApp = express(),
    port = process.env.PORT || 3000;

// API routes
var router = express.Router();
router.get('/deliverNotes/:entry', function (request, response) {
    var cashMachine = cashMachineModule.CashMachine.getInstance();
    var result = cashMachine.deliverNotes(+request.params.entry);
    response.json(result);
});

// Register the route
cashMachineApp.use('/api', router);

// Start the server
cashMachineApp.listen(port);
console.log('Cash Machine RESTful API server started on: ' + port);