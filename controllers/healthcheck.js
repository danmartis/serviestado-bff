const healthcheck = (req, res) => {
    return res.status(200).send({ code: 'OK' });
};

module.exports = {
    healthcheck
}