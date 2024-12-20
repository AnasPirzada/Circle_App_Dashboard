import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { router } from './routes/routing.jsx';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
