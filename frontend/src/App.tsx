import { Categories } from '@/features/categories';
import { Guide, Guides } from '@/features/guides';
import { Home } from '@/features/home';
import { Error } from '@/shared/routes/Error.tsx';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './shared/components/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="/:gameName" element={<Categories />}></Route>
      <Route path="/:gameName/:categoryName" element={<Guides />}></Route>
      <Route path="/:gameName/:categoryName/:guideName" element={<Guide />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
