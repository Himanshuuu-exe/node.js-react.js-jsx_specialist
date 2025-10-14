const pth=require('path');
const fs=require('fs');

let files=fs.readdirSync(".");
let i=0;

let file=null;
let st=null;

while(i<files.length){
    file=files[i];
    st=fs.statSync(file);

    if(st.isFile()){
        console.log("file "+file);
    }

    if(st.isDirectory()){
        console.log("directory: "+file);
    }
    i++;
}