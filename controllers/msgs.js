const Msg = require(`../models/msg`)

const getAllmsgs = async (req,res) => {
    try {

        const msgs = await Msg.find()
        res.status(201).json({msgs})
    }catch(error){
        res.status(500).json({msg:error})

    }
}
const creatmsg = async (req,res) => {
    try {

        const msg = await Msg.create(req.body)
        // console.log(msg, req.body)
        res.status(201).json(msg)
    }catch(error){
        res.status(500).json({msg:error})

    }
}

const deletemsg = async (req,res) => {
    try {
        const {id:msgID} = req.params
        const msg = await msg.findOneAndDelete({_id:msgID})
        if (!msg) {
        return res.status(404).json({msg: `no msg with such ${msgID} id,,, you suck`})

        }
        res.status(200).json({msg})

    }catch(error){
        res.status(500).json({msg:error})

    }}

module.exports = {
    getAllmsgs,
    creatmsg,
    deletemsg
}