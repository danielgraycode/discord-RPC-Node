//COPYRIGHT DANIEL GRAY 2017. SEE LICENCE.MD FOR MORE INFO

//Setup variables
const { webFrame, remote } = require("electron");

const mainProcess = remote.require(`${__dirname}/../app.js`);
const config = require('../config.json')

//Render page 
document.getElementById('topline').innerHTML = config.topline
document.getElementById('bottomline').innerHTML = config.bottomline
if (config.includeTime == "t") {
    document.getElementById('isTimeEnabled').innerHTML = "Enabled"
} else {
    document.getElementById('isTimeEnabled').innerHTML = "Disabled"
}

/* document.getElementById("updateRpc").addEventListener("click", function() {
    rpc.setActivity({
        details: document.getElementById('topline').innerHTML,
        state: document.getElementById('bottomline').innerHTML
    });
})
*/