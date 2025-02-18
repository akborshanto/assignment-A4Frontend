import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/app/store.ts';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
<Toaster></Toaster>
    </Provider>

 
  </StrictMode>
);
