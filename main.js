// console.log("Hello from electron app")
const {app,BrowserWindow} = require('electron')

const createWindow = ()=>{
    const win = new BrowserWindow({
        width:800,
        height:600,
        // webPreferences:{
        //     nodeIntegration:true
        // }
    })

    // win.loadFile('index.html')
    win.loadURL('https://www.google.com')
}

app.whenReady().then(()=>{
    createWindow()

    app.on('activate',()=>{
        if(BrowserWindow.getAllWindows().length===0){
            createWindow();
        }
    })
})


app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit()
    }
})