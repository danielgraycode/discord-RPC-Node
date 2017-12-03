//COPYRIGHT DANIEL GRAY 2017. SEE LICENCE.MD FOR MORE INFO

//setup variables
const electron = require("electron")
const app = electron.app;
const ipc = electron.ipcMain;
const dialog = electron.dialog;
const BrowserWindow = electron.BrowserWindow;
const fs = require("fs")
const DiscordRPC = require("discord-rpc");
const config = require("./config.json");
const clientID = "386551475951632384";
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date()

ipc.on('open-error-dialog', function(event) {
    dialog.showErrorBox('An Error Message', 'Demonstrating an error message.')
})

app.on('ready', function() {
    openClient()
})

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    openClient()
})



//setup the electron view
function openClient() {
    console.log("Client Loaded")
    let win = new BrowserWindow({ width: 510, height: 500, resizable: false })
    win.loadURL(`file://${__dirname}/static/index.html`)
}


//Setup the rich presence message
async function setActivity() {
    if (config.includeTime == "t") {
        rpc.setActivity({
            details: config.topline,
            state: config.bottomline,
            startTimestamp,
            instance: false,
        });
    } else

        rpc.setActivity({
        details: config.topline,
        state: config.bottomline,
        instance: false,
    });
}

//Start RPC server
rpc.on('ready', () => {
    setActivity();
    console.log("started...")

    setInterval(() => {
        setActivity;
    }, 12000);

});

rpc.login(clientID).catch(console.erorr);