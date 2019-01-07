const electron = require('electron');
const url = require('url');
const path = require('path');

const { ipcRenderer, app, BrowserWindow, Menu, ipcMain} = electron;

//SET ENV
// process.env.NODE_ENV = "production";

let mainWindow;

//listen for app to be ready

app.on('ready', function() {
  //Create new window
      mainWindow = new BrowserWindow({
        width: 1024,
        height: 650,
        minWidth: 1024,
        minHeight: 650,
        show: false
      });
  // create a new `splash`-Window
      splash = new BrowserWindow({
        width: 1024,
        height: 650,
        minWidth: 1024,
        minHeight: 650,
        frame: false,
        alwaysOnTop: true
      });
      splash.loadURL(url.format({
        pathname: path.join(__dirname, 'splash.html'),
        protocol: 'file:',
        slashes: true
      }));
  //Load html into winddow
      mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'),
        protocol: 'file:',
        slashes: true
      }));

  // if main window is ready to show, then destroy the splash window and show up the main window
      mainWindow.once('ready-to-show', function() {
        splash.destroy();
        mainWindow.show();
      });
  // Quit app when closed.
      mainWindow.on('closed', function() {
        app.quit();

      });

  // Build menu from Template
      const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  //Insert menu
      Menu.setApplicationMenu(mainMenu);

});

  //Create menu Template
    const mainMenuTemplate = [

      {
        label: 'File',
          submenu:[
              {
                label: 'Add Item',
                click(){
                  createAddWindow()
                }

              },
              {
                label: 'Clear Items',
                click(){
                  mainWindow.webContents.send('item:clear')
                }
              },
              {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click(){
                  app.quit();
                }
              }
          ]
      }

    ];

// If mac, add empty object to Menu

  if(process.platform == 'darwin'){
    mainMenuTemplate.unshift({});
  }

// Add Developer tools item if not in prod

  if(process.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
      label: 'Developer Tools',
      submenu:[
        {
          label: 'Toggle Devtools',
          accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
          click(item,focusedWindow){
            focusedWindow.toggleDevTools();
          }
        },
        {
          role: 'reload'
        }
      ]
    });
  }
