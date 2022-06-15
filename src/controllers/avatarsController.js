const uploadAvatar = async (req, res, next) => {
    const name = req.params.name
    const avatar = `public/avatar/${name}`;
    res.json({ avatar })
    // res.json({ status: 'success' })
}

module.exports = {
    uploadAvatar
}