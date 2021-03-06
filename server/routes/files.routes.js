const express = require('express');
const router = express.Router();
const uploader = require('../configs/cloudinary.config');

router.post('/upload', uploader.single("curriculum"), (req, res, next) => {

    if (!req.file) {
        res.status(500).json({ message: 'Error loading the file' });
        return;
    }

    res.json({ secure_url: req.file.path });
})

router.post('/upload/photo', uploader.single("profilePhoto"), (req, res, next) => {

    if (!req.file) {
        res.status(500).json({ message: 'Error loading the file' });
        return;
    }

    res.json({ secure_url: req.file.path });
})

router.post('/upload/cvitae', uploader.single("cvitae"), (req, res, next) => {

    if (!req.file) {
        res.status(500).json({ message: 'Error loading the file' });
        return;
    }

    res.json({ secure_url: req.file.path });
})

module.exports = router;