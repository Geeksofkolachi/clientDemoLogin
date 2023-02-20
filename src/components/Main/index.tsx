import { Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authUser } from '../../provider';
import Home from '../Home';
import Error from '../Error';
import Login from '../../pages/Login';

const MainRoutes = () => {
  const user = useRecoilValue(authUser);
  return (
    <Routes>
      <Route path='/' element={user?.session ? <Home /> : <Navigate to='/login' replace />} />
      <Route
        path='/error'
        element={user?.session ? <Navigate to='/' replace /> : user?.message ? <Error /> : <Navigate to='/login' replace />}
      />
      <Route path='/login' element={user?.session ? <Navigate to='/' replace /> : <Login />} />
    </Routes>
  );
};

export default MainRoutes;
