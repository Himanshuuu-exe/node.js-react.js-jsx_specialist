const pth=require('path');
const fs=require('fs');

function walkPath(folderPath){
    let files=fs.readdirSync(folderPath);
    let i=0;
    let file=null;

    while(i<files.length){
        files=files[i];
        st=fs.statSync(folderPath+pth.sep+file);
        if(st.isFile()){
            console.log("file:"+folderPath+pth.sep+file);
        }
        if(st.isDirectory()){
            console.log("entering directory:"+folderPath+pth.sep+file);
            walkPath(folderPath+pth.sep+file);
        }
        i++;
    }
}

walkPath('C:\Users\chira\Downloads\HscDocs\kkks ');