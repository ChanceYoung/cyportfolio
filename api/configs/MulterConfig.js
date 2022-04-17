import multer from 'multer'
import path from 'path'
import v4 from 'uuidv4'

const imageStorage = multer.diskStorage({
    destination: './assets/images',
    filename: (req, file, cb) => {
        cb(null, 'profile_' + v4() + path.extname(file.originalname))
    },
})
const upload = multer({
    storage: imageStorage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname)
        if (
            ext !== '.png' &&
            ext !== '.jpg' &&
            ext !== '.gif' &&
            ext !== '.jpeg'
        ) {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
}).single('image')

export default upload
