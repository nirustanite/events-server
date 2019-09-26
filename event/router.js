const { Router } = require('express');
const Event = require('./model');

const router = new Router();


router.post('/event', (req, res, next) => {
    Event.create(req.body)
         .then(event => res.send(event))
         .catch(next);
});

router.put('/event/:id', (req,res,next) => {
    Event.findByPk(req.params.id)
         .then(event => {
             if(event){
                return event.update(req.body)
                      .then(event =>  res.send(event));
             }
             return res.status(404).end();
         })
         .catch(next)
});

router.get('/event',(req,res,next) => {
    Event.findAll()
         .then(event => {
             if(event){
                 return res.send(event);
             }
             return res.status(404).end();
         })
         .catch(next);
});

router.get('/event/:id', (req,res,next) => {
    Event.findByPk(req.params.id)
         .then(event => {
             if(event){
                 return res.send(event);
             }
             return res.status(404).end();
         })
         .catch(next)
});

router.delete('/event/:id', (req,res,next) => {
    Event.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(number => {
        if(number){
            return res.send({number})
        }
        return res.status(404).end();
    })
    .catch(next);
});

module.exports = router;

