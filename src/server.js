const express = require("express")
const fileUpload = require("express-fileupload")
const cors = require("cors")
const morgan = require("morgan")
const { default: App } = require("./App")

const app  = express()

app.use(fileUpload({
    createParentPath:true
}))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"))

app.post('/picture', async(req,res) => {
    try {
        if(!req.files){
            res.send({
                status:false,
                message:"no files"
            })

        } else {
            const {picture} = req.files

            picture.mv("./uplods" + picture.name)
            res.send({
                status:true,
                message:"File is Uploaded"
            })
        }
    }catch(e){
        res.status(500).send(e)
    }
})

const port = process.env.PORT || 4000
app.listen(port, ()=> console.log( `Server is running on port $(port}`))