module.exports = function (req, res, next) {

    const key = process.env.key

    if (!(req.params.key == key)) {
        res.status(404).send()
    } else {
        next()
    }
}