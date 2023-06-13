// import { Router } from 'express'

// export const apiRouter = Router()

//   apiRouter.get("/gifs", (req, res) => {
//     const db = req.context.db;
//     const gifs = db.get("gifs").take(50).value()
//     res.status(200).json(gifs);
//   });

import express from 'express'

export const apiRoutes = express.Router()
