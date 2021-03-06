// Require the modules needed, in this case, Electron's IPC and menubar.
const menubar = require('menubar');
const ipc = require('electron').ipcMain;


// MENUBAR
// Create a new instance on menubar.
var mb = menubar({
    dir: __dirname + "/views",
    width: 550,
    height: 140,
    preloadWindow: true,
    icon: __dirname + 'assets/images/nucleus.png'
});

mb.on('ready', function ready () {
  console.log('Ready!')
  // your app code here
});
mb.on('show', function () {
  mb.window.webContents.send('show');
});

mb.app.on('activate', function () {
  mb.showWindow();
});

ipc.on('abort', function () {
  mb.hideWindow();
});
// END OF MENUBAR
