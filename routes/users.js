import express from 'express';
let router = express.Router();

/* GET users listing. */
router.post('/login', (req, res, next) => {
 res.json(req.body);
});

export default router;
