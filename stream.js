var util = require('util');
var stream = require('stream');

util.inherits(Counter, stream.Readable);

var c = new Counter();
c.pipe(process.stdout);

function Counter() {
    stream.Readable.call(this, {});
}

var i = 0;
Counter.prototype._read = function () {
    console.log('_read');

    var self = this;
    setInnerBuffer();

    function setInnerBuffer() {
        console.log('setInnerBuffer');

        setTimeout(function () {
            if (i === 10) {
                self.push(null);
                return;
            }
            self.push(i++ + '\n');
        }, 1000);
    }
};
