const {app,BrowserWindow} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 450,
        height: 700,
        resizable: false,
        webPreferences:{
            nodeIntegration:true
        }
    })

    win.loadFile("index.html")
}


app.whenReady().then(createWindow)