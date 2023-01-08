module.exports = (err, req, res) => {
    res.status(err.status || 400).json(err.message || 'Server error');
}
