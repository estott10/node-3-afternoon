const swag = require('../models/swag');

module.exports = {
    search: (req, res, next) => {
        const { category } = req.query;
        
        const swagCategoryList= swag.findIndex( prods => {
            prods.category === category;
        } );
        if(swagCategoryList != -1){
            const filteredSwag = swag.filter( product => {
                product.category === category;
            } );
            
            res.status(200).send(filteredSwag);
        }
        res.status(200).send(swag);
    }
}