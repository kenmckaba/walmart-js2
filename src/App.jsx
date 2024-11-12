import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WalmartApp } from './components/WalmartApp'
import { Provider } from '@/components/ui/provider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const queryClient = new QueryClient()

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <WalmartApp />
      </QueryClientProvider>
    </Provider>
  )
}

export default App
