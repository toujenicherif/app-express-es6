import express from 'express';
import {addUser} from '../models/UserModel';
let router = express.Router();

/* GET users listing. */
router.post('/login', (req, res, next) => {
    res.json(req.body);
});

router.post('/register', (req, res, next) => {
    addUser({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            phone:req.body.phone,
            role:req.body.role
        }
    ).then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

export default router;
