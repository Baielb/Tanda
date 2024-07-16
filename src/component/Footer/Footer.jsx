import Container from "../Container/Container";
import css from "./Footer.module.css";
import logoFooter from "../../assets/svg/logoFooter.svg";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";

const nameFooter1 = [
  "О нас",
  "Способы оплаты",
  "Доставка",
  "Политика конфиденциальности",
  "Персональные данные",
];
const nameFooter2 = ["Продавайте на UNO", "Курьерам"];
const nameFooter3 = ["unokg@gmail.com", "+996 700 000 000", "+996 500 000 000"];

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.footerDf}>
          <div>
            <div>
              <img src={logoFooter} alt="" />
            </div>
            <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
              <GrInstagram style={{ width: "22px", height: "22px" }} />
              <ImWhatsapp style={{ width: "22px", height: "22px" }} />
            </div>
          </div>
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "23.44px",
              }}
            >
              Компания
            </h3>
            {nameFooter1.map((item, idx) => (
              <div key={idx}>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "21.09px",
                    marginTop: "12px",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "23.44px",
              }}
            >
              Продавайте на UNO
            </h3>
            {nameFooter2.map((item, idx) => (
              <div key={idx}>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "21.09px",
                    marginTop: "12px",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "23.44px",
              }}
            >
              Контакты
            </h3>
            {nameFooter3.map((item, idx) => (
              <div key={idx}>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "21.09px",
                    marginTop: "12px",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
