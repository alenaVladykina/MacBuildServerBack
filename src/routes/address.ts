import {Request, Response, Router} from "express";

export const addressesRouter = Router()

const address = [{value: 'Lenina 12'}, {value: 'Bolshevikov 12'}]
addressesRouter.get('/', (req: Request, res: Response) => {
  let helloMessage = 'Hello Incubator!!!!'
  res.send(helloMessage)
})