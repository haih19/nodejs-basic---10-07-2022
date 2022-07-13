import express from "express";
import getHomePage from '../controller/homeController.js'



let router = express.Router()

const initWebRoute = (app) => {
    router.get('/', getHomePage)

    router.get('/about', (req, res) => {
        res.send('This is about route')
    })

    return app.use('/', router)
}

export default initWebRoute;