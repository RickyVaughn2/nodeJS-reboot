//npm install -g reboot
//npm install -g moment

var reboot = require('nodejs-system-reboot');
var moment = require('moment');
moment('HHmm');

function execute(){
    print(moment.toString());
    if (moment=='0300'){
        // - reboot server
        reboot( function (err, stderr, stdout) {
        if(!err && !stderr) {
            console.log(stdout);
        }
        });
    }
}
// - run every 20 seconds
setInterval(execute,20000)




