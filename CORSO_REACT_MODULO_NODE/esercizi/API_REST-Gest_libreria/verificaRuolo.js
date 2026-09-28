const verificaRuolo = (ruoloRichiesto) => {
  return (req, res, next) => {
    if (req.user.ruolo !== ruoloRichiesto) {
      const err = new Error('Accesso negato');
      err.status = 403;
      return next(err);
    }
    next();
  };
};

module.exports = verificaRuolo;