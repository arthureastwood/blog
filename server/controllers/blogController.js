import fs from 'fs';
import imagekit from '../configs/imageKit.js';

export const addBlog = async(req, res)=>{
    try{
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);
        const imageFile = req.file;

        //Check if all fields are present
        if(!title || !description || !category || !imageFile){
            return res.json({success: false, message: "Please fill all the fields"});
        }

        const fileBuffer = fs.readFileSync(imageFile.path);

        //Upload image to ImageKit
        const  response = await imagekit.upload({
            file: fileBuffer, //required
            fileName: imageFile.originalname, //required
            folder: "/blogs" //optional
        })

        //optimazation through imagekit URL transformation
        const optimizedImageURL = imagekit.url({
            src: response.url || response.thumbnailUrl,
            transformation: [{
                width: 800,
                height: 600,
                crop: "maintain_ratio"
            }]
        });
        const newBlog = new Blog({
            title,
            subTitle,
            description,
            category,
            image: response.url || response.thumbnailUrl, // Use thumbnailUrl if available
            imageId: response.fileId,   // Use fileId for future reference
            isPublished
        });

        await newBlog.save();
        res.status(201).json({
            success: true,
            data: newBlog
        });
    }
    catch(error){

    }
}