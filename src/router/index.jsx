import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from '../pages/ListPage';
import FormPage from '../pages/FormPage';
import DetailPage from '../pages/DetailPage';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/add" element={<FormPage />} />
      <Route path="/edit/:id" element={<FormPage />} />
      <Route path="/details/:id" element={<DetailPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
