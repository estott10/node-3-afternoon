const swag = require('../models/swag');

module.exports = {

    add: (res, req, next) => {
        const { id } = req.query;
        const { session } = req;
        if(session.cart.id) {
            res.status(200).send(session.user);
        } else {
            swag.find( (prod, i) => {
                id === swag.id
            } );
            session.cart.push(id);
        res.status(200).send(session.user);
        }
        session.cart.total = session.cart.total + swag.
    },

    delete: (res, req, next) => {
        res.status(200).send();

    },

    checkout: (res, req, next) => {
        res.status(200).send();

    }
}