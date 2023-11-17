import css from "../../styles/styles.css";
import { Link } from 'react-router-dom';

function Header() {
  const {HeaderContainer, Logo, MenuList, MenuItem} = css
  const styles ={textDecoration: 'none',color: '#b9faf8'}

  return (
    <HeaderContainer>
      <Logo>FINCALC</Logo>
      <MenuList>
        <MenuItem>
          <Link style={styles} to={"/"}>
            Главная
          </Link>
        </MenuItem>

        <MenuItem>
          <Link style={styles} to={"/statistic"}>
            Статистика
          </Link>
        </MenuItem>

        {/* <MenuItem>
          <Link style={styles} to={"/"}>
            Планирование
          </Link>
        </MenuItem> */}
      </MenuList>
    </HeaderContainer>
  );
}

export default Header;
