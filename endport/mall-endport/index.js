const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //extended为false表示使用querystring来解析数据，这是URL-encoded解析器

app.use(bodyParser.json()); //添加json解析器

const data = [
    {
      id: 1,
      name: "Chicago Bulls",
      parent_id: "芝加哥111"
    },
    {
      id: 2,
      name: "Cleveland Cavaliers",
      parent_id: "克里夫兰骑士"
    },
    {
      id: 3,
      name: "Detroit Pistons",
      parent_id: "123"
    },
    {
      id: 4,
      name: "Indiana Pacers",
      parent_id: "印第安纳步行者"
    },
    {
      id: 5,
      name: "Chicago Bulls",
      parent_id: "芝加哥公牛"
    },
    {
      id: 6,
      name: "Cleveland Cavaliers",
      parent_id: "克里夫兰骑士"
    },
    {
      id: 7,
      name: "Detroit Pistons",
      parent_id: "底特律活塞"
    },
    {
      id: 8,
      name: "Indiana Pacers",
      parent_id: "印第安纳步行者"
    },
    {
      id: 9,
      name: "Chicago Bulls",
      parent_id: "芝加哥公牛"
    },
    {
      id: 10,
      name: "Cleveland Cavaliers",
      parent_id: "克里夫兰骑士"
    },
    {
      id: 11,
      name: "Detroit Pistons",
      parent_id: "底特律活塞"
    },
    {
      id: 12,
      name: "Indiana Pacers",
      parent_id: "印第安纳步行者"
    },
    {
      id: 13,
      name: "Chicago Bulls",
      parent_id: "芝加哥公牛"
    },
    {
      id: 14,
      name: "Cleveland Cavaliers",
      parent_id: "克里夫兰骑士"
    },
    {
      id: 15,
      name: "Detroit Pistons",
      parent_id: "底特律活塞"
    },
    {
      id: 16,
      name: "Indiana Pacers",
      parent_id: "印第安纳步222"
    }
];

app.post("/data", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // console.log(req);
    console.log(req.body);

    let { pageNumber , pageSize, parent_id } = req.body; // 点击页码 , 每页展示  

    res.send({
      pageSize: 5,
      pageNumber: 1,
      totalRow: data.length,
      totalPage: 2,
      list: data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
    });

});

app.listen(3000, () => console.log("hello ming!"));
