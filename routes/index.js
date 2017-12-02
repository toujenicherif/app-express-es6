import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'login' });
});


router.get('/signin', (req, res, next) => {
    res.render('signin', { title: 'signin' });
});

export default router;
