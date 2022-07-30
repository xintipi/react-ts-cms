import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Login from '@/pages/Login/Login';
import Dashboard from '@/pages/Dashboard/Dashboard';
import RootLayout from '@/layouts/Root/RootLayout';

function App() {
  useEffect(() => {
    setMetaTitle();
  }, []);

  const setMetaTitle = () => {
    document.title = import.meta.env.VITE_APP_TITLE;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/dashboard"
        element={
          <RootLayout>
            <Dashboard />
          </RootLayout>
        }
      />
    </Routes>
  );
}

export default App;
