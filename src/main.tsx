
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import MainRouter from './routes/route.tsx'
import UserStateProvider from './services/providers/user-provider.tsx'
import UsersDataProvider from './services/providers/data-provider.tsx'
import { Toaster } from 'react-hot-toast'




createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <UsersDataProvider>
      <UserStateProvider>
        <Toaster />
        <MainRouter />
      </UserStateProvider>
    </UsersDataProvider>
  </BrowserRouter>

  ,
)
