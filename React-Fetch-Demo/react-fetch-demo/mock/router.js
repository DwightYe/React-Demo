const express = require("express");
const router = express.Router();

router.get("/api/list",(req,res) =>{
    res.send([{
        name:"iwen",
        age:20
    },{
        name:"ime",
        age:21
    }])
})

module.exports = router;