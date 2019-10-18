const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const router = express.Router();
const multer = require('multer');
const stream = require('stream');


// var multer  = require('multer');
// var upload = multer({dest:'uploads/'});
// const url = ["https://cdn.shopify.com/s/files/1/2384/6329/files/AN102JRGLDSJ0.jpg?11259333323301067155",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/AN103JRGLDSS8_36e42fb9-151c-4de2-a7cd-28d9f9dffc60.jpg?12817995354317403791",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR146MDGLDM5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR184PNGLDSV0.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR185PNGLDU7.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR250BCGLDSA5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR251BCGLDSA0.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR317RRGLDSH0.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB106JTGLDA3.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB107JTGLDB3.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/AN102JRGLDSJ0.jpg?11259333323301067155",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/AN103JRGLDSS8_36e42fb9-151c-4de2-a7cd-28d9f9dffc60.jpg?12817995354317403791",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR146MDGLDM5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR147MDGLDM5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR149MDGLDM5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR150MDGLDM5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR154MDGLDM5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR183PNGLDU7.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR184PNGLDSV0.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR185PNGLDU7.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR186PNGLDSV0.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR220UCSLVB8.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR221UCSLVB8.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR250BCGLDSA5.jpg?13510565694736177453",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR251BCGLDSA0.jpg?15368495462504580745",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR315RRGLDSH0.jpg?1973024513737701642",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR316RRGLDSH0.jpg?1973024513737701642",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/BR317RRGLDSH0.jpg?1973024513737701642",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB106JTGLDA3.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB107JTGLDB3.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB110JTOXDJ7.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB112JTOXDA3.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB114JTOXDA0.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB138PVGLDRA0.jpg?6907911614025874861",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB141PVGLDRV0.jpg?6907911614025874861",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB161IJGLDRS0.jpg?12555474679919669065",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB163BRGLDHH0.jpg?12555474679919669065",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB166GJGLDRV1.jpg?12555474679919669065",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB170BRGLDHA0.jpg?12555474679919669065",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB207CCGLDRU3.jpg?13009788424555405514",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB209SJGLDSM4.jpg?17004712172803137234",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB216CCJJGLDRI1.jpg?12577319853452049363",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB219BRPAGLDAJ5.jpg?4073666609267343500",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB230KJGLDRS0.jpg?1583117874023341204",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CB233KBGLDRR5.jpg?1583117874023341204",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CH102AJGLDR5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CH105AJGLDB0.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CH108AJGLDM0.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CH112AJGLDU2.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/CH119KNGLDSH2.jpg?8490206576060331862",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/EB148AJGLDR0.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/EB149AJGLDH5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/EB153AJGLDJ5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/EB154AJGLDJ5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/EB156AJGLDI5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED106CCGLDSV5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED107CCLCTB8.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED109CCLCTU8.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED112CCLCTSS2.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED115CCLCTSV2.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED121AJGLDU0_e9cfd5d4-857a-4f60-a0e3-2947f918811c.jpg?4510922291489581740",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED125AJGLDU0_e2622aa9-190d-4547-a6d6-266a1080b23c.jpg?4510922291489581740",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED128AJGLDU0_d110b528-5e48-4d03-be17-d87eee5e9d75.jpg?4510922291489581740",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED157MDGLDS5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED161MDGLDS5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED162MDGLDS5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED167MDGLDI5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED170MDGLDI5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED171MDGLDI5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED172MDGLDH2.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED173MDGLDH2.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED176PNGLDJ1.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED177PNGLDI5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED182PNGLDJ1.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED183PNOXDJ1.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED184PNGLDR4.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED186PNOXDI5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED189PNGLDJ1.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED190PNGLDR5.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED194PNOXDJ1.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED198PNOXDR2.jpg",
//     "https://cdn.shopify.com/s/files/1/2384/6329/files/ED199PNOXDJ3.jpg"
// ];
// router.post('/upload',upload.single('file'),(req,res,next)=>{
// }
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './uploadDoc')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// });

// const upload = multer({ dest : 'uploadDoc'});
// app.use('/files',(req,res,next)=>{
//     fetch(url).then(result=>{
//         res.send(result);
//     })
// })
// axios.get(url).then(result=>{
//     res.send({
//         data:result
//     })
// })
// app.use((req,res,next)=>{
//     res.send("working in new project");   
// })
const axios = require('axios');
const fs = require('fs');
const path = require('path');
var config = {
    responseType: 'stream',
    headers: {

        'content-type': 'image'
    }
};
// var list = [];

// 
app.use('/list', (req, res, next) => {
      const urllist = req.body.url;
     console.log(urllist);
    getImage(urllist).then(a=>{
    res.send(a);
    })
    // console.log(delpromise);
    // firstAsync().then(a=>{console.log(a); })
    
    //  res.send({
    //      imageName:name
    //  })
     



    // const rock =JSON.stringify(urllist.url);
    // // console.log(rock);
    // var list = rock.split('"/');
    // console.log(list);
    //   list.push(urllist);
    //  console.log(list);
    // const list =urllist.map(rock);
    // console.log(list);
})
// const directory = path.join(__dirname, '/uploadDoc');
// app.use('/uploadDoc', express.static(directory));
// app.use("/", express.static(path.join(__dirname, "uploadDoc")));
// app.use('/imagefile',(req,res,next)=>{
//     const tempPath = req.file.path;
//     console.log(tempPath);  

// })
var namelist= [];
// var promiseObjects=[];
    // var pathName = [];
async function getImage(urllist) {
    
    for (let i in urllist) {
        let resp = await axios.get(urllist[i], config);
        //  promiseObjects.push(resp);
        const imagename = 'image' + i+'_'+Date.now()+ '.jpg';

        
        // console.log("test");
        // console.log(resp.headers);
        if (resp.status == 200) {
            // console.log("inside");
            const Path = path.resolve(__dirname, 'uploadDoc',imagename);
            console.log(Path)
            // const Writer
            const writer = fs.createWriteStream(Path);
              resp.data.pipe(writer);
              namelist.push({
                "imageName":imagename,
                "imagepath":Path
            }          
            );
            //   resp.data.pipe(fs.createWriteStream());
            // const Path = path.resolve(__dirname, 'uploadDoc', 'image' + i + '.jpg');
            //  const writer = fs.createWriteStream(Path)          
        }
        
    }
    // console.log(promiseObjects);
    // await Promise.all(promiseObjects);
    return( 
       namelist);
    //  console.log(name);

    //  return "hari";

    

}
// async function firstAsync() {   return {a:'27'}; }  





app.listen(5000);