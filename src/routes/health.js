const express = require("express") ;
const { status } = require("express/lib/response");

const router = express.Router() ;

router.get("/" , (req,res) =>{
    res.status(200).json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    })
});

module.exports = router ;