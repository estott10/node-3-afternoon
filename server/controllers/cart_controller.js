const swag = require('../models/swag');

module.exports = {

    add: (res, req, next) => {
        const { id } = req.query;
        const { cart } = req.session.user;

        const index = cart.findIndex(product => {
            product.id === id
        })
        if (index === -1) {
            //locate the swag object when you only have the name of the array and a key of the needed object
            const swagProduct = swag.find(swag => {
                swag.id === id
                }
            );
            cart.push(swagProduct);
            req.session.user.total += swagProduct.price;
        }
        res.status(200).send(req.session.user)
    },

    remove: (res, req, next) => {
        //search for id in cart and compare to request id
        //if matches... splice object that contains id
        //subtract price of object/item from total
        const { id } = req.query;
        const { cart } = req.session.user;
        const { total } = req.session.user;

        const indexOfLineItem = cart.findIndex( cartItem => {
            cartItem.id === id;
        } );

        if(indexOfLineItem != -1){
            total -= cart.indexOfLineItem.price;
            cart.splice(indexOfLineItem, 1);
            res.status(200).send(req.session.user);
        }
        res.sendStatus(500);
    },

    checkout: (res, req, next) => {
        const { cart } = req.session.user;
        const { total } = req.session.user;

        cart = [];
        total = 0;        
        res.status(200).send(session.user);
    }
}