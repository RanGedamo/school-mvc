const names = require('../model/names-model');


const getAllNames = (req, res) => {
    if (names && names != []) {
        return res.send({ massage: "success", names })
    }
    return res.send({ massage: "Names not Found" })
}
const addName = (req,res)=>{
    if(names){
        names.push(req.body.name);
        return res.send({massage:"success",names});
    };
    return res.send({massage:"name not available"})
};


module.exports = { getAllNames,addName };