var dateModule = require('./lib/date.js');

let app = {};

app.config = {
    'interval': 1000
};

app.printDate = function () {
    console.log(dateModule.dateString());
}

app.timeLoop = function () {
    setInterval(app.printDate, app.config.interval);

}

app.timeLoop();