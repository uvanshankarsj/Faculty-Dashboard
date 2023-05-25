const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'storage/papers/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const uploadPaper = multer({ storage: storage}).single('file');

const uploadpaper = (req, res) => {
    uploadPaper(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: err });
        }
        return res.status(200).send(req.file);

    });

}

const uploadMultiplePapers = multer({ storage: storage }).array('files', 10);

const uploadMultiplepapers = (req, res) => {
    uploadMultiplePapers(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: err });
        }
        return res.status(200).send(req.files);
    });
}

const getFile = (req, res) => {
    const filename = req.params.filename;
    const directoryPath = path.join(__dirname, '../../storage/papers/');

    res.download(directoryPath + filename, filename, (err) => {
        if (err) {
            return res.status(500).json({ message: err });
        }
    });
}

const deleteFile = async (req, res) => {
    const filename = req.params.filename;
    const directoryPath = path.join(__dirname, '../../storage/papers/');
    try {
        await unlinkAsync(directoryPath + filename);
        return res.status(200).json({ message: 'File deleted successfully' });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}

const getAllFiles = (req, res) => {
    const directoryPath = path.join(__dirname, '../../storage/papers/');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ message: err });
        }
        return res.status(200).send(files);
    });
}


module.exports = {
    uploadpaper,
    uploadMultiplepapers,
    getFile,
    deleteFile,
    getAllFiles
}


