const key = process.env.key

module.exports = async (req, res, next) => {
    if (!req.params.key == key) {
        return res.status(404)
    }
    next()
}