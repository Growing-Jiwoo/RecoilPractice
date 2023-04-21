import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './Style/global';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <CookiesProvider>
      <BrowserRouter>
        {/* <ThemeProvider display={display}> */}
        <RecoilRoot>
          <App />
        </RecoilRoot>
        <GlobalStyle />
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </CookiesProvider>
  </QueryClientProvider>
  // </React.StrictMode>
);

reportWebVitals();
