const { app, BrowserWindow, globalShortcut } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    title: "Lap Desktop",
    fullscreen: false,           // Set the window to full screen
    autoHideMenuBar: true,      // Hide the menu bar
    width: 1280,
    height: 860,
  });

  win.loadFile('./lab-app/build/index.html');
  win.loadFile(path.join(__dirname, 'lab-app', 'build', 'index.html'));

  // Disable Window+R
  globalShortcut.register('CommandOrControl+R', () => {
    return false;
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
