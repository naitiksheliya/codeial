const express=require("express")
const router=express.Router();

const postController=require("../controllers/admin_controllers")
router.get('/access',postController.giveAccess)

module.exports=router;
