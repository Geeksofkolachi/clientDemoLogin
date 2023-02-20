import { useRecoilState } from 'recoil';
import { authUser } from '../provider';
import { showToast } from '../utils/Toast';
import { useNavigate } from 'react-router-dom';
import { LoginType } from '../types';
import { signInWithUsernamePassword } from '../utils/Api';

const useAuth = () => {
  const [, setAuth] = useRecoilState(authUser);
  const navigate = useNavigate();

  const login = async (data: LoginType) => {
    const res = await signInWithUsernamePassword('https://my-domain.pix/api/login', {
      method: 'GET',
      headers: {
        Xtag1: '11223344',
        Auth: `${data.username}:${data.password}`,
      },
    });

    if (res?.status !== 'ok') {
      showToast({ type: 'error', message: 'Something Went Wrong!' });
      setTimeout(() => {
        navigate('/error');
      }, 250);
    } else {
      showToast({ type: 'success', message: 'Successfully Login' });
      setTimeout(() => {
        navigate('/');
      }, 250);
    }
    setAuth(res);
  };

  const signOut = () => {
    setTimeout(() => {
      setAuth(null);
      navigate('/login');
    }, 250);
  };
  return {
    login,
    signOut,
  };
};

export default useAuth;
