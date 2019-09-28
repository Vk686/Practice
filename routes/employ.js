const express = require('express');
const router = express.Router();
const User = require('../models/User');

//find data
router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    }catch(err){
        res.json({message: err});
    }
});
//post data
router.post('/', async (req, res) => { 
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });try {
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err){
        res.json({message: err});
    }
});
//find specific data
router.get('/:userId', async (req, res) => {
    try {   const user = await User.findById(req.params.userId);
        res.json(user);
    }catch(err){
        res.json({message: err});
    }
});

// delete post

router.delete('/:userId', async (req, res) => {
    try{
        const removeUser = await User.remove({_id: req.params.userId});
        res.json(removeUser);
    
    }catch(err){
        res.json({message: err});
    }
});

//update post 
router.patch('/:userId', async (req,res) => {
    try{
        const updatedUser = await User.updateOne(
            {_id: req.params.userId},
            {$set : {name: req.body.name}});
            res.json(updatedUser);
    }catch(err){
        res.json({message: err});
    }
})


module.exports = router;