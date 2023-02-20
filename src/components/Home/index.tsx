import { useRecoilValue } from 'recoil';
import useAuth from '../../hook/useAuth';
import { authUser } from '../../provider';

const Home = () => {
  const res = useRecoilValue(authUser);
  const { signOut } = useAuth();
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='text-2xl font-medium'>{`Hello ${res?.user?.name}, your session is ${res?.session}`}</div>
      <div onClick={signOut} className='cursor-pointer font-medium'>
        Sing Out
      </div>
    </div>
  );
};

export default Home;
