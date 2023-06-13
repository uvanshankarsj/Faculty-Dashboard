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
    },
    limits: {
    fileSize: 10000000
}
});

const timetableStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'storage/timetable/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
    limits: {
    fileSize: 10000000
}
});

const uploadTimetable = multer({ storage: timetableStorage ,limits: {
    fileSize: 10000000
}}).single('file');

const uploadtimetable = (req, res) => {
    uploadTimetable(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: err });
        }
        return res.status(200).send(req.file);
    
    });

}
const uploadMultipleTimetables = multer({ storage: timetableStorage ,limits: {
    fileSize: 10000000
}}).array('files', 10);

const uploadMultipletimetables = (req, res) => {
    uploadMultipleTimetables(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: err });
        }
        return res.status(200).send(req.files);
    });
}

const getTimetable = (req, res) => {
    const filename = req.params.filename;
    const directoryPath = path.join(__dirname, '../../storage/timetable/');
    res.download(directoryPath + filename, filename, (err) => {
        if (err) {
            return res.status(500).json({ message: err });
        }
    });
}

const deleteTimetable = async (req, res) => {
    const filename = req.params.filename;
    const directoryPath = path.join(__dirname, '../../storage/timetable/');
    try {
        await unlinkAsync(directoryPath + filename);
        return res.status(200).json({ message: 'File deleted successfully' });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}

const getAllTimetables = (req, res) => {
    const directoryPath = path.join(__dirname, '../../storage/timetable/');
    const files = fs.readdirSync(directoryPath);
    let fileInfos = [];

    files.forEach((file) => {
        fileInfos.push({
            name: file,
            url: directoryPath + file,
            type: path.extname(file),
        });
    }
    );
    return res.status(200).send(fileInfos);
}

const uploadPaper = multer({ storage: storage,limits: {
    fileSize: 10000000
}}).single('file');

const uploadpaper = (req, res) => {
    uploadPaper(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: err });
        }
        return res.status(200).send(req.file);

    });

}

const uploadMultiplePapers = multer({ storage: storage,limits: {
    fileSize: 10000000
} }).array('files', 10);

const uploadMultiplepapers = (req, res) => {
    uploadMultiplePapers(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: err });
        }
        return res.status(200);
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
    const files = fs.readdirSync(directoryPath);
    let fileInfos = [];

    files.forEach((file) => {
        fileInfos.push({
            name: file,
            url: directoryPath + file,
            type: path.extname(file),
        });
    }
    );
    return res.status(200).send(fileInfos);
}


    

module.exports = {
    uploadpaper,
    uploadMultiplepapers,
    getFile,
    deleteFile,
    getAllFiles,
    uploadtimetable,
    uploadMultipletimetables,
    getTimetable,
    deleteTimetable,
    getAllTimetables
}


