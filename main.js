const { app, BrowserWindow } = require('electron');
const { join } = require('path');
const { format } = require('url');
let win;

function createWindow()
{
    // create Browser Window
    win = new BrowserWindow({
        webPreferences: {
            // preload: '${__dirname}/preload.js'
            nodeIntegration: true
        },
        width:1200,
        height:740,
        icon:__dirname+'/assets/icon.jpg',
    });

    // load index.html
    win.loadURL(format({
        pathname: join(__dirname, "index.html"),
        protocol: 'file:',
        slashes: true
    }));

    // open devtools
    win.webContents.openDevTools();
    win.on("closed", () => {
        win = null;
    });
}
// run createWindow function on ready
app.on("ready", createWindow);

// Quit when all windows are closed
app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
    {
        app.quit();
    }
});
