
const { getAllOffers, createOffer, deleteOffer, editOffer } = require('../services/cryptoService');
const { getOfferById } = require('../services/cryptoService');
const { parseError } = require('../util/parser');

const routes = require('express').Router();



routes.get('/create', (req,res) => {
    res.render('create', {
        title: 'Create page'
    })
});

routes.post('/create', async (req,res) => {
    try {
        
        const cryptoData = {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            description: req.body.description,
            methodPay: req.body.payment,
            buyCripto: [],
            owner: req.user._id
        };
        const offer = await createOffer(cryptoData)
        
        res.redirect('/crypto/catalog') 
    } catch(err) {
        console.error(err);
        const errors = parseError(err);
        res.render('create', {
            title: 'Create page',
            errors,
            body: {
                username:req.body.username
            }
        })
    }
})

routes.get('/catalog', async (req,res) => {
    const offers = await getAllOffers();
    res.render('catalog', {
        title: 'Catalog page',
        offers
    });
});

routes.get('/details/:id', async(req,res) => {
    try { const offer = await getOfferById(req.params.id);

    if(req.user) {
        offer.hasUser = true;
    } else { offer.hasUser = false }
    
    if(req.user._id == offer.owner) {
        offer.isOwner = true;
    } else { offer.isOwner = false }

    if(offer.buyCripto.find(b => b._id == req.user._id)) {
        offer.isBuy = true;
    } else { offer.isBuy = false}
    
    res.render('details', { offer })
    } catch(err) {
        console.error(err)
    }
});

routes.get('/delete/:id', async (req,res) => {
    try {
        const offer = await getOfferById(req.params.id);
        if(offer.owner != req.user._id) {
            throw new Error('Cannot delete offer you haven\'t created!')
        }
        await deleteOffer(req.params.id);
        res.redirect('/catalog');
    } catch(err) {
        console.error(err);
        res.redirect('/crypto/details/' + req.params.id)

    }
});

routes.get('/edit/:id', async (req,res) => {
    try{
    const offer = await getOfferById(req.params.id);
        if(offer.owner != req.user._id) {
            throw new Error('Cannot edit offer you haven\'t created!')
        }
        res.render('edit', {offer})
    } catch(err) {
        console.error(err);
        res.redirect('/crypto/details/' + req.params.id)
    }
});

routes.post('/edit/:id', async (req,res) => {
    try {
        const offer = await getOfferById(req.params.id);
        if(offer.owner != req.user._id) {
            throw new Error('Cannot edit offer you haven\'t created!')
        }
        await editOffer(req.params.id, req.body);
        res.redirect('/crypto/details/' + req.params.id);
    } catch(err) {
        console.error(err);
        const errors = parseError(err);
        res.render('edit', {
            errors
        })

    }
});







module.exports = routes;