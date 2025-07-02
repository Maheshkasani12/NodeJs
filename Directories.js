const fs =require('fs');
// fs.mkdir('newDirectory',(err)=>{
//     if(err){
//         return console.log('error creating directory',err)
//     }
//     console.log('directory created successfully');
// })


// Syncronus 
// fs.mkdirSync('newDirectory2')
// console.log('directory successfully created')



//read file by async

// fs.readdir('/',(err,files)=>{
//     if(err){
//         return console.log('Error occured');
//     }
//     console.log('Directory content',files);
// })


//read file by sync

// const files =fs.readdirSync('./')
// console.log('Dir content',files);


//check if directory is present or not

// const dirName = 'newdirectory1'
// if(fs.existsSync(dirName)){
//     console.log("directory exist");
    
// }
// else{
//     console.log("Dir not  exist");
// }


//remove directory

// fs.rmdir('newDirectory',(err)=>{ // if dir is empty it will work =>indtread use rm only
//     if(err){
//         return console.error('error',err);

//     }
//     else{
//         console.log('directorty removed sucessfully');
//     }
// })

//using rm only

fs.rm('newDirectory2',{recursive: true},(err)=>{ 
    if(err){
        return console.error('error',err);

    }
    else{
        console.log('directorty removed sucessfully');
    }
})