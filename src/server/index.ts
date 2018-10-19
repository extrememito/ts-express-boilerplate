import express from 'express'
import { Ahoj } from '../models/skuskta';

const ahoj = new Ahoj()

const app = express()

app.listen(8000, () => console.log('Server running on 8000!!'))

