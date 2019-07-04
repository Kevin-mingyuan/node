const express = require("express");
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //extended为false表示使用querystring来解析数据，这是URL-encoded解析器

app.use(bodyParser.json()); //添加json解析器

const data = {
    code:1,
    date:['2019-04-01','2019-04-02','2019-04-03','2019-04-04','2019-04-05','2019-04-06','2019-04-07','2019-04-08','2019-04-09','2019-04-10','2019-04-11','2019-04-12','2019-04-13','2019-04-14','2019-04-15','2019-04-16','2019-04-17','2019-04-18','2019-04-19','2019-04-20','2019-04-21','2019-04-22','2019-04-23','2019-04-24','2019-04-25','2019-04-26','2019-04-27','2019-04-28',"2019-04-29","2019-04-30",],
    // date:(function (){
    //     var res = [];
    //     var len = 0;
    //     while (len < 10) {
    //         res.push(new Date().toLocaleString());
    //         len++;
    //     }
    //     return res;
    // })(),
    data:[
        {
            name:"工字钢",
            data:[3200, 4320, 3010, 3340, 3333, 3213, 4321,4567, 3456,  3340, 3333, 3213, 4321,4567, 3456,  3340, 3333, 3213, 4321,4567, 3456, 3340, 3333, 3213, 4321,4567, 3456, 3310,3330, 1210]
            // data:(function (){
            //     var res = [];
            //     var len = 0;
            //     while (len < 10) {
            //         res.push((Math.random()*10 + 325).toFixed(1) - 0 ||(Math.random()*10 + 525).toFixed(1) - 0);
            //         len++;
            //     }
            //     return res;
            // })()
        },
        {
            name:"角钢",
            data:[2200, 1820, 1910, 2340, 2900, 3300, 3100,2200, 1820, 1910, 2340, 2900, 3300, 3100,2200, 1820, 1901, 2340, 2900, 3300, 3100,2200, 1820, 1901, 2340, 2900, 3300, 3100,3300, 1100]
            // data:(function (){
            //     var res = [];
            //     var len = 0;
            //     while (len < 10) {
            //         res.push((Math.random()*10 + 135).toFixed(1) - 0 || (Math.random()*10 + 235).toFixed(1) - 0);
            //         len++;
            //     }
            //     return res;
            // })()
        },
        {
            name:"槽钢",
            data:[1500, 2320, 2010, 1540, 1900, 3300, 4100,1500, 2320, 2010, 1540, 1900, 3300, 4100,1500, 2320, 2010, 1540, 1900, 3300, 4100,1500, 2320, 2010, 1540, 1900, 3300, 4100,3300, 1100]
            // data:(function (){
            //     var res = [];
            //     var len = 0;
            //     while (len < 10) {
            //         res.push((Math.random()*10 + 245).toFixed(1) - 0 || (Math.random()*10 + 425).toFixed(1) - 0);
            //         len++;
            //     }
            //     return res;
            // })()
        }
    ]
};

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  console.log(req.req);

  res.send({
   data
  });

});

app.listen(9000, () => console.log("hello ming!"));
