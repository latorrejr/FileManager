const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  win.loadURL("data:text/html,<h1>FileManager</h1>");
}

app.whenReady().then(createWindow);
