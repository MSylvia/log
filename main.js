const {app, BrowserWindow, webFrame} = require('electron')
const path = require('path')
const url = require('url')

if (process.argv[2] && process.argv[2] == "dev") require('electron-reload')(__dirname)

var win

app.on('ready', function() {
  win = new BrowserWindow({width: 1000, height: 600, backgroundColor: '#0c0c0c', resizable:true, autoHideMenuBar: true, frame: false, icon: __dirname + '/icon.ico'})

  win.loadURL(`file://${__dirname}/index.html`)

  win.on('closed', () => {
    win = null
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (win === null) createWindow()
})
