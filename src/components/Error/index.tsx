import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authUser } from '../../provider';

const Error = () => {
  const res = useRecoilValue(authUser);

  return (
    <div className='flex items-center justify-between p-5'>
      <div className='text-2xl font-medium'>{`${res?.message}`}</div>
      <Link to='/login' className='cursor-pointer font-medium'>
        go back to login
      </Link>
    </div>
  );
};

export default Error;
