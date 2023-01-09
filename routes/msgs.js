const express = require('express')
const router = express.Router()

const {getAllmsgs,
    creatmsg,
    deletemsg} = require(`../controllers/msgs`)

router.route(`/`).get(getAllmsgs).post(creatmsg)
router.route(`/:id`).delete(deletemsg)

module.exports = router