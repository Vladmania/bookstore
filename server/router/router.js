const Router = require('express')
const router = new Router()
const ProductControler = require("../controler/controler")
const BasketControler = require("../controler/controler_basket")
const UserControler = require('../controler/user_controler')
const FeedbacksControler = require('../controler/feedbacks_controler')
const fileMiddleware = require('../middleware/file')


router.post("/addprod",ProductControler.addProduct)
router.get("/prod",ProductControler.alladdProduct)
router.delete("/delete/:id",ProductControler.deleteProduct) 

router.post("/addinbasket", BasketControler.addInBacket)
router.get("/basket", BasketControler.getBacket)
router.delete("/deletebasket/:id", BasketControler.deleteFromBacket)

router.post("/addfeedback", FeedbacksControler.addFeedback)
router.get("/getfeedback/:id", FeedbacksControler.getFeedback)

router.post("/registration", UserControler.addUser) 
router.post("/user", UserControler.loginUser)
router.get("/users", UserControler.Users)
router.put("/editoruser", UserControler.editorDataUser)
router.post("/editoruseravatar",fileMiddleware.single('avatar'), UserControler.editorDataUserAvatar)
router.delete("/deleteuser/:id", UserControler.deleteUser)

module.exports = router