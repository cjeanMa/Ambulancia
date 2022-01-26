import multer from 'multer';
import multerS3 from 'multer-s3'
import AWS from 'aws-sdk'
import yenv from 'yenv'
import { IError } from '../helpers/error.handler';

const env = yenv()

AWS.config.update({ 
    region: 'us-east-2'
})

const s3 = new AWS.S3()

export class UploadMiddleware {

    static S3(fieldName: string, mimeTypesAllowed: string[]) {
        try{

            return multer({
                storage: multerS3({
                    s3: s3,
                    bucket: env.S3.BUCKET_NAME,
                    acl: "public-read",
                    metadata: (req:any, file, cb) => {
                        cb(null, { fieldName: file.fieldname })
                    },
                    key: (req:any, file, cb) => {
                        const mimeType = file.mimetype
                        const isMimeTypeAllowed = mimeTypesAllowed.includes(mimeType)
                        if (!isMimeTypeAllowed) {
                            const error: IError = new Error("invalid type file")
                            error.status = 400;
                            cb(error)
                        }
                        else {
                            const partsFile = file.originalname.split(".");
                            const newName = Date.now().toString()
                            const extension = partsFile[partsFile.length - 1]
                            const newFileName = `${newName}.${extension}`
                            req.body[fieldName] = newFileName
                            console.log(req.body)
                            cb(null, newFileName)
                        }
                    }
                })
            }).single(fieldName)
        }
        catch (err) {
            console.log(err)
        }
    }

}