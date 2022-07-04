



const router = require("express").Router();

const {getCostomer,gettransactions}=require("../controller/user.controller")



router.get("/customer",getCostomer)


router.get("/transactions",gettransactions)
module.exports = router; 