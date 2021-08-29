const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/user.model");
const Post = require("../models/post.model");

//Update

router.put("/:id", async (req, res) => {
	if (req.body.userId === req.params.id) {
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			req.body.password = await bcrypt.hash(req.body.password, salt);
		}
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);

			res.status(200).json(updatedUser);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(401).json("You can update only your account...!");
	}
});

//Delete

router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        
        try {
            //deleting all posts if your was deleted his account 
            const user = await User.findById(req.params.id);

            
            try {
                //we are checking if username is same then delete the posts 
                await Post.deleteMany({username: user.username});

                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted...");
            }
            catch (err) {
                res.status(500).json(err);
            }
        }
        catch (err) {
            res.status(400).json("User not found..!");
        }
		
	} else {
		res.status(401).json("You can delete only your account...!");
	}
});

module.exports = router;
