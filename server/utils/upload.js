import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://${username}:${password}@ac-2u9chhj-shard-00-00.jotqcag.mongodb.net:27017,ac-2u9chhj-shard-00-01.jotqcag.mongodb.net:27017,ac-2u9chhj-shard-00-02.jotqcag.mongodb.net:27017/?ssl=true&replicaSet=atlas-2y7idg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 