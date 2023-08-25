import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './UserMenu/UserMenu';

import { isUserLogin } from '../../redux/auth/auth-selectors';

import items from './items';

import styles from './navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  console.log(isLogin);
const filterItems = isLogin ? items : items.filter(item => !item.private);
const elements = filterItems.map(({ id, text, link }) => (
  <li key={id}>
    <NavLink className={styles.link} to={link}>
      {text}
    </NavLink>
  </li>
));
  
  return (
    <div className={styles.navbar}>
      {/* <Link to="/">Logo</Link> */}
      <ul className={styles.menu}>{elements}</ul>
      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </div>
  );
};

export default Navbar;
