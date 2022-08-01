import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLoginIn } from '@/pages/Login/Login.slice';

function Login() {
  const dispatch = useDispatch();
  const loginIn = useSelector(
    (state: { login: { loginIn: string } }) => state['login'].loginIn,
  );

  console.log(loginIn);

  const onSumitForm = () => {
    dispatch(startLoginIn(true));
  };

  return (
    <Fragment>
      <div>
        Login !!!
        <button onClick={onSumitForm}>Submit</button>
      </div>
    </Fragment>
  );
}

export default Login;
