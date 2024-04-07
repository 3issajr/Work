const jwt = require('jsonwebtoken');

requireAuth = (req, res, next) => {
    const secret = process.env.JWT_SECRET || "your-secret-key";
    
    // Retrieve the JWT token from cookies
    const token = req.cookies.token; // Assuming the token is stored in a cookie named 'token'
    if (!token) {
        return res.status(401).json({ error: "Authorization token not provided" });
      }

    jwt.verify(token, secret, (err, decodedToken) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        } else {
            // Store the decoded token in the request for further use if needed
            req.decodedToken = decodedToken;
            console.log("Token Found:", decodedToken);
            next(); // Call next() to proceed to the next middleware or route handler
        }
    });
};

module.exports =  requireAuth ;
