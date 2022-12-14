import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import RootLayout from '@/layouts/Root/RootLayout';
import Profile, { ProfileTransfer } from '@/models/Profile';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Login from '@/pages/Login/Login';
import { Auth } from '@/services/auth.service';

const titles = {
  '/login': 'Login',
  '/dashboard': 'Dashboard',
};

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title =
      titles[pathname as keyof typeof titles] || import.meta.env.VITE_APP_TITLE;
    getProfileApi().then((r) => r);
  }, [pathname]);

  const getProfileApi = async () => {
    try {
      const data = await Auth.profile();
      const dataTransfer = (data as unknown as ProfileTransfer[]).map(
        ({ body, id, title, userId }: ProfileTransfer) =>
          new Profile({ body, id, title, userId }),
      );
      console.log(dataTransfer);
    } catch (err) {
      return err;
    }
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
