const electron = require('electron');
const url = require('url');
const path = require ('path');
const {ipcRenderer} = electron;

const {app, BrowserWindow, Menu, ipcMain} = electron;
//SET ENV

process.env.NODE_ENV = "production";

let mainWindow;

  //listen for app to be ready

  app.on('ready',function(){
      //Create new window
      mainWindow = new BrowserWindow({
        width: 1024,
        height: 650,
        minWidth: 1024,
        minHeight: 650
      });
    //Load html into winddow
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'main.html'),
      protocol: 'file:',
      slashes: true
    }));

});
