import { useSelector } from 'react-redux';

import { getAuth } from 'redux/auth/auth-selectors';

import styles from './home-page.module.css';

const HomePage = () => {
  const { user, token } = useSelector(getAuth);
  const name = user.name;
  if (!token) {
    return (
      <div className={styles.div}>
        караул
      {/* <div className={styles.div}> */}
        <h2 className={styles.title}>Welcome! 👍</h2>
        <div className={styles.p_span}>
          <span className={styles.text}>To get started, please register</span>
          <span className={styles.span}>📚 </span>
          <span className={styles.text}> or login</span>
          <span className={styles.span}>🔑</span>
        </div>
       </div>
      // </div>
    );
  }
  return (
    <div className={styles.div}>
      кара
      <div className={styles.p_span}>
        <span className={styles.text}>
          {name}, select Phonebook to continue
        </span>
        <span className={styles.span}>📲</span>
        <span className={styles.text}> or Logout</span>
        <span className={styles.span}>🔒</span>
      </div>
    </div>
  );
};
export default HomePage;
