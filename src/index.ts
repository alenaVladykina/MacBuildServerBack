import express from 'express'
import bodyParser from 'body-parser'
import {productsRouter} from "./routes/product";
import {addressesRouter} from "./routes/address";
import {basketRouter} from './routes/basket';


const app = express()
const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 3000


const parserMiddleware = bodyParser({})
app.use(parserMiddleware)


app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)
app.use('/basket', basketRouter)


app.listen(port)

