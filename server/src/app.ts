import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import { globalErrorHandler, notFoundHandler } from '@/middleware/errorHandler.js'
import router from '@/routers/index.js'
import database from '@/database/database.js'

const app = express()

database.connectDB()

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://vietprompt.onrender.com', // Thay bằng URL client của bạn
    'https://viet-prompt-v1.vercel.app' // URL từ GitHub
  ],
  credentials: true,
  optionsSuccessStatus: 200
}

// Middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// Routes
app.use('/api', router)

// Error handling
app.use(notFoundHandler)
app.use(globalErrorHandler)

export default app
