const express = require("express");
const app = express();
const apiRoute = express.Router();
const bodyParser = require('body-parser');
const Host = '14.120.5.57' || 'localost'; //本地服务器地址
const Port = '8080'; //端口号

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended:true
}));

const appData = require('./data.json');
const qgdt = appData.qgdt; //求购动态
const shop = appData.shop.all; //商城大厅
const shidan = appData.shidan; //实单求购
const process = appData.process; //我要加工
const store = appData.store;//商家店铺
const logistics = appData.logistics; //物流加工
const ming = {username:'15560238975',password:'123456'}; //用户
const usersAll = [{username:'15560238975',password:'123456'}]; //总用户
 
//跨域
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    };
    // next();
});

apiRoute.get("/qgdt",(req,res)=>{
    res.json({
        errno:0,
        qgdt:qgdt,
    });
});

//da ting
apiRoute.post("/shop",(req,res)=>{
    console.log(req.body);
    let page = req.body.page; //前端返回的页码

    let begin = (page - 1) * 10;  //(返回页码 -1) * 10  取十条

    let data = shop.slice(begin, 10*page); //整个数组截取 0,10 | 10,20 | 20,30
    let noData = 0; //0 有 1没有
    if(data.length === 0 || data.length < 10){
        noData = 1;
    }else{
        noData = 0;
    };

    res.setHeader('Access-Control-Allow-Origin', "*");
    res.json({
        errno:0,
        shop:data,
        noData:noData,
    });
});

apiRoute.get("/shidan",(req,res)=>{
    res.json({
        errno:0,
        shidan:shidan,
    });
});

apiRoute.get("/store",(req,res)=>{
    res.json({
        errno:0,
        store:store,
    });
});

//search搜索提示
let searchArr = []; //搜索返回数据
apiRoute.post("/search",(req,res)=>{
    console.log(req.body);
    searchArr = [];
    
    shop.forEach((item)=>{
        if(item.name.includes(req.body.ipt)){
            // console.log(item);
            searchArr.push(item);
        };
    });  
       
    res.json({
        errno:0,
        data:searchArr,
    });
});

//加工

apiRoute.post("/process",(req,res)=>{
    console.log(req.body);
    let page = req.body.page; //页码

    let begin = (page - 1) * 10;

    let data = process.slice(begin,10*page);

    let overNum = 0;
    
    //判断是不是为空
    if(data.length != 10){
        overNum = 1;
    }else{
        overNum = 0;
    };

    let searchArr = [];

    //判断搜索信息
    if(req.body.searchIpt != ""){
        process.forEach((item,index)=>{
            if(item.name.includes(req.body.searchIpt)){
                searchArr.push(item);
            };
        });
        
        let newSearchArr = searchArr.slice(begin,10*page);

        res.json({
            errno:0,
            data:newSearchArr, 
            msg:"加工搜索",
            over:overNum,
        });

    }else{
        res.json({
            errno:0,
            data:data,
            msg:"加工",
            over:overNum,
        });
    };
});

//接收加工详情 
apiRoute.post("/processinfo",(req,res)=>{
    console.log(req.body ,'process info');

    if(req.body != ""){
        res.json({
            code:0,
            msg:"提交成功"
        });
    }else{
        res.json({
            code:1,
            mes:"提交失败"
        });
    };
    
});

//物流
apiRoute.post("/logistics",(req,res)=>{
    res.json({
        errno:0,
        data:logistics,
    });
});

//登录
apiRoute.post("/login",(req,res)=>{
    let user = req.body;// {username:****,password:****}
    if(user.username === ming.username && user.password === ming.password){
        res.json({
            error:0,
            msg:"登录成功",
            token:1031,
        });
    }else{
        res.json({
            error:1,
            msg:"账户密码不对",
        });
    }
    console.log(user);
});

//注册
apiRoute.post("/register",(req,res)=>{  
    console.log(req.body);
    res.send('123');
});


// app.listen(5000,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('open port 5000');
//     };
// });

app.listen(Port,Host,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('open port 5000');
    };
});

app.use("/api",apiRoute);