const jwt = require('jsonwebtoken');

const verificaJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer TOKEN
  
  if (!token) {
    const err = new Error('Token mancante');
    err.status = 401;
    return next(err);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // id, username, ruolo
    next();
  } catch (e) {
    const err = new Error('Token invalido');
    err.status = 401;
    next(err);
  }
};

module.exports = verificaJWT;