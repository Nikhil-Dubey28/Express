exports.getSuccess = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'))
}