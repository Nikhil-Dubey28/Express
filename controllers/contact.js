exports.getContact = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'))
}

exports.postContact = (req, res) => {
    res.redirect('/success')
}