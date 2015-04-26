var fs = require('fs');

setInterval(func1, 10);
var i = 0;

function func1() {
    i++;
    console.log('\n>>>func1: ' + i);

    fs.stat('index2.json', function (err) {

        //If file doesn't exist, create it.
        if (err && err.code !== 'ENOENT') {
            fs.writeFile('index2.json', JSON.stringify({time: new Date()}), function () {

            });
        }
        else {
            var startTime = new Date();
            console.log('start readFile: ' + startTime.valueOf());
            fs.readFile('index2.json', {encoding: 'utf8'}, function (err, data) {

                var finishTime = new Date();
                console.log('finish readFile: ' + finishTime.valueOf());
                console.log('readFile miliseconds: ' + (finishTime - startTime) + ', content: ' + data);

                var writeStartTime = new Date();
                console.log('start writeFile: ' + writeStartTime.valueOf());
                fs.writeFile('index2.json', JSON.stringify({time: now}), function () {

                    var writeFinishTime = new Date();
                    console.log('finish writeFile: ' + writeFinishTime.valueOf());
                    console.log('writeFile miliseconds: ' + (writeFinishTime - writeStartTime));
                });
            });
        }
    });

}
