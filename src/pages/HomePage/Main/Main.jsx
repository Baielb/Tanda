import carMoika from "../../../assets/svg/carMoika.svg";
import css from "./Main.module.css";
import Moika from "../../../assets/svg/Moika.svg";
import { HiUserCircle } from "react-icons/hi2";
import zvezda from "../../../assets/svg/zvezda.svg";
import CustomButton from "../../../UI/CustomButton";

const Main = () => {
  const images = Array(4).fill(carMoika);
  return (
    <section className={css.main}>
      <div>
        <span style={{ color: "#757575", fontSize: "16px" }}>
          Главная / Бытовая техника /
          <span style={{ color: "#1E90FF" }}> Стиральные машины</span>
        </span>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <div className={css.df}>
            {images.map((src, index) => (
              <img key={index} src={src} alt="sd" />
            ))}
          </div>
          <div>
            <img src={Moika} alt="" />
          </div>
        </div>
        <div className={css.text}>
          <div className={css.text_display}>
            <h3>Стиральная машина Atlant на 7 кг</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <HiUserCircle
                style={{ width: "24px", height: "24px", color: "#DEDEDE" }}
              />
              <p style={{ fontSize: "18px", fontWeight: "400" }}>
                Название магазина
              </p>
            </div>
            <p style={{ color: "#757575",marginTop: "4px", marginBottom: "16px" }}>Брент</p>
            <div className={css.otzyv}>
              <div>
                <img src={zvezda} alt="" />
              </div>
              <h5 style={{marginLeft: "4px", fontSize: "18px", fontWeight: "400"}}>4,9</h5>
              <a style={{marginLeft: "16px", color:"#757575"}} href="">60 отзывов</a>
            </div>
          </div>
          <div className={css.opicanie}>
            <h5>Описание</h5>
            <p>
              Промышленная швейная машина «Jack JK-H2» выполнена с увеличенным
              челноком и двойным транспортом ткани. Ось челнока расположена
              горизонтально. Двойной механизм подачи ткани позволяет
              предотвратить посадку материала. Модель явлется
              усовершенствованным вариантом машины Jack JK6380BCQ но имеет ряд
              доработок: Латунные втулки на механизме продвижения.
            </p>
            <button>Смотреть характеристики</button>
          </div>
        </div>
        <div className={css.modal}>
            <div style={{marginBottom: "20px"}}>
                <span className={css.spanModal}>32500 сом <span>32500 сом</span></span>
            </div>
            <CustomButton style={{marginTop: "20px"}}/>
            <button className={css.buttonMain}>Оформить в кредит</button>
        </div>
      </div>
    </section>
  );
};

export default Main;
