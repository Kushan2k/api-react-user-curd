
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router'
import MainRouter from './routes/route.tsx'
import UserStateProvider from './services/providers/user-provider.tsx'
import UsersDataProvider from './services/providers/data-provider.tsx'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <UsersDataProvider>
        <UserStateProvider>
          <MainRouter />
        </UserStateProvider>
      </UsersDataProvider>
    </BrowserRouter>
  </QueryClientProvider>
  ,
)
