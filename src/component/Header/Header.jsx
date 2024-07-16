import Container from "../Container/Container";
import css from "./Header.module.css";
import logo from "../../assets/logo/logo.svg";
import { IconButton, InputBase, Paper } from "@mui/material";
import { LuUser2, LuShoppingCart } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.head}>
          <div style={{ cursor: "pointer" }}>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <Paper
              className={css.search}
              sx={{
                borderRadius: "16px",
                width: "694px",
                boxShadow: "none",
              }}
              component="form"
            >
              <IconButton
                sx={{ alignItems: "center" }}
                type="button"
                aria-label="search"
              >
                <FiSearch />
              </IconButton>
              <InputBase
                placeholder="Искать на UNO"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>
          </div>
          <div className={css.user}>
            <div className={css.user2}>
              <div className={css.icon}>
                <CiSearch className={css.iconAdaptiv} />
              </div>
            </div>
            <div className={css.user2}>
              <div className={css.icon}>
                <LuUser2 className={css.iconImage} />
              </div>
              <h4>Войти</h4>
            </div>
            <div className={css.user2}>
              <div className={css.icon}>
                <LuShoppingCart className={css.iconImage} />
              </div>
              <h4>Корзина</h4>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
