const uploadAvatar = async (req, res, next) => {
    const name = req.params.name
    const avatar = `public/avatars/${name}`;
    return res.json({ avatar })
}

module.exports = {
    uploadAvatar
}