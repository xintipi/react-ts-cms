import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLoginIn } from '@/pages/Login/Login.slice';
import styles from './Login.module.scss';

function Login() {
  const dispatch = useDispatch();
  const loginIn = useSelector(
    (state: { login: { loginIn: string } }) => {
      console.log(state['login']);
      return state['login'].loginIn
    },
  );

  console.log(loginIn, 'state');

  const onSumitForm = () => {
    dispatch(startLoginIn(true));
  };

  return (
    <Fragment>
      <div className={styles['login__page']}>
        <p>Login page</p>
        <button onClick={onSumitForm}>Submit</button>
      </div>
    </Fragment>
  );
}

export default Login;
