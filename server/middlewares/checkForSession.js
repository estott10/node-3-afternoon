// module.exports = 
//     function(req, res, next) {
//         if (req.session.user) {
//             next();
//         } else {
//             req.session.user = {
//                 username: '', cart: [], total: 0.00
//             };
//         }
//     }


    module.exports = function( req, res, next ) {
        const { session } = req;
      
        if ( !session.user ) {
          session.user = { username: '', cart: [], total: 0 };
        } 
        
        next();
      };