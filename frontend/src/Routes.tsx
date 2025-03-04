import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { ErrorPage } from './components/ErrorPage';
import { QaPage } from './components/QaPage';
import { Explanation } from './components/Explanation';
import { Schema } from './components/Schema';

/*
 * Main navigation and error handling
 * Greetings data is provided by a DataLoader
 */
const routesConfig = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <QaPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'explain',
        element: <Explanation />,
        errorElement: <ErrorPage />,
        },
        {
          path: 'schema',
          element: <Schema />,
          errorElement: <ErrorPage />,
          },
      ],
  },
];

const router = createBrowserRouter(routesConfig, {
  basename: document.querySelector('base')?.getAttribute('href') ?? '/',
});

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
