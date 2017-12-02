import express from 'express';
let router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send({ routeName: '/api/' });
});

router.get('/users', (req, res, next) => {
    res.send({ routeName: ' get /api/users' });
});


router.post('/users', (req, res, next) => {
    res.send({ routeName: 'post /api/users' });
});


router.delete('/users', (req, res, next) => {
    res.send({ routeName: 'delete /api/users' });
});


router.put('/users', (req, res, next) => {
    res.send({ routeName: ' put /api/users' });
});

export default router;
