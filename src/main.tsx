
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Проверяем, открыто ли приложение внутри Telegram
const telegram = (window as any).Telegram?.WebApp

if (telegram) {
  telegram.ready()
  telegram.expand()
  telegram.setHeaderColor('#101216')
  telegram.setBackgroundColor('#101216')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
