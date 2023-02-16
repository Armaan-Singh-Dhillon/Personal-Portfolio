import skillSchema from '../../../server/models/skillModel.js';
import mongoose from 'mongoose';
import nextConnect from 'next-connect';
import multer from 'multer';
import verifyToken from '../../../server/verifyToken.js'
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/skills')
    },
    filename :(req , file ,cb)=>{
        const ext = file.mimetype.split('/')[1]
        cb(null ,file.originalname)

    }
})
const multerFilter = (req ,file ,cb)=>{
    if(file.mimetype.startsWith('image')){
        cb(null ,true)
    }
    else{
        cb(new Error('not an image !'),false)
    }
}
const upload =multer ({
    storage:multerStorage,
    fileFilter : multerFilter
})

const uploadMiddleware = upload.single('photo')


const apiRoute = nextConnect({

    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.use(verifyToken);
apiRoute.use(uploadMiddleware);



apiRoute.post(async (req, res) => {

    const { name } = req.body
    const {filename} = req.file

    const Skill = mongoose.models.Skills || mongoose.model('Skills', skillSchema);

    try {

        await mongoose.connect(process.env.MONGODB_URI)


        await Skill.create({ name, photo: filename });
        res.status(201).json({
            message: "skill added",
            name,
            photo:filename

        })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            message: "error"
        })
    }
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false,
    },
};

