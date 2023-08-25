import { useSelector, useDispatch } from 'react-redux';

// import styles from './navbar-user.module.scss';
import { getUser } from 'redux/auth/auth-selectors';

import {logout} from 'redux/auth/auth-operations'

const NavbarUser = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch()

  const onLogout =() => {
    dispatch(logout())
  }
  return (
    <div>
      {email}, <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default NavbarUser;
