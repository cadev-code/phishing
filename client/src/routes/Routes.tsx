import { Home, Registers } from '@/pages';
import { Navigate, Route, Routes } from 'react-router';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/registers/phishing/table" element={<Registers />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
