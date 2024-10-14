import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Global } from '@emotion/react'
import globalStyles from './styles/globalStyles' //global 스타일을 적용하기 위해서 사용
import { AlerContextProvider } from '@context/AlertContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import AuthGuard from '@components/auth/AuthGuard'
import { RecoilRoot } from 'recoil'

const client = new QueryClient({
  defaultOptions: {},
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <AlerContextProvider>
          <AuthGuard>
            <App />
          </AuthGuard>
        </AlerContextProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()