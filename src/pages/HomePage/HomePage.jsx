import Container from "../../component/Container/Container";
import Banner from "./Banner/Banner";
import Main from "./Main/Main";
import Product from "./Product/Product";
import Reviews from "./Reviews/Reviews";
import fiveZvezda from "../../assets/svg/fivezvezda.svg";
import { FaRegPenToSquare } from "react-icons/fa6";

const HomePage = () => {
  return (
    <Container>
      <Banner />
      <Main />
      <h3
        style={{
          fontSize: "24px",
          fontWeight: "600",
          textDecoration: "underline solid #B0B0B0",
          textUnderlineOffset: "10px",
          marginBottom: "24px",
        }}
      >
        Отзывы
      </h3>
      <div
        style={{
          display: "flex",
          marginBottom: "-20px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <img src={fiveZvezda} alt="" />
        </div>
        <div>
          <FaRegPenToSquare />
          <span style={{ marginLeft: "10px" }}>Написать отзыв</span>
        </div>
      </div>
      <Reviews />
      <button
        style={{
          backgroundColor: "#E9F4FF",
          fontSize: "16px",
          fontWeight: "600",
          padding: "10px 0px",
          width: "269px",
          borderRadius: "16px",
          color: "#1e90ff",
          border: "none",
          marginTop: "32px"
        }}
      >
        Смотреть все отзывы
      </button>
      <h3 style={{ fontSize: "24px", fontWeight: "600", marginTop: "50px" }}>
        Похожие товары
      </h3>
      <Product />
    </Container>
  );
};

export default HomePage;
