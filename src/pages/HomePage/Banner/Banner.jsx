import { CiMenuBurger } from "react-icons/ci";
import css from "./Banner.module.css"
const menu = [
  {
    icon: <CiMenuBurger />,
    name: "Все категории",
  },
  {
    name: "Стать продавцом",
  },
  {
    name: "О нас",
  },
  {
    name: "Курьерам",
  },
  {
    name: "Контакты",
  },
  {
    name: "Доставка",
  },
];

const Banner = () => {
  return (
      <section>
        {menu.map((menu, idx) => {
          return (
            <div  className={css.menuText} key={idx}>
              <div>{menu.icon}</div>
              <h5>{menu.name}</h5>
            </div>
          );
        })}
      </section>
  );
};

export default Banner;
