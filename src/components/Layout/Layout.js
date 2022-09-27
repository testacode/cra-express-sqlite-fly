import { createContext, useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import Header from '../Header';

export const AuthContext = createContext({});

const Layout = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      if (token) {
        await fetch(`/auth/token/${token}`);
      }
      await fetch('/profile').then((res) => res.json());
      setIsAuth(true);
      return navigate('/');
    } catch {
      navigate('/login');
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value = {
    isAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      <Header />
      <Outlet />
    </AuthContext.Provider>
  );
};

export default Layout;
