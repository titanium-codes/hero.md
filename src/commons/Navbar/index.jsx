import React from 'react';
import { Link } from 'react-router-dom';
import navbarItems from './navbarItems';
import * as styles from './style';

const Navbar = ({ history }) => {
  const { pathname } = history.location;
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {navbarItems.map(({
 bg, title, path, color, left, top
}) => (
  <Link className={styles.menueButton} to={path} key={title}>
    <div className={styles.iconWithCircle}>
      {pathname === path && <styles.Circle color={color} left={left} top={top} />}
      <img src={bg} alt={title} />
    </div>
    <styles.ButtonName color={pathname === path ? color : ''}>{title}</styles.ButtonName>
  </Link>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
