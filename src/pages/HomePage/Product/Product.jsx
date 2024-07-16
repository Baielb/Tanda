import ProductMap from "../../../utils/ProductMap/ProductMap";
import css from "./Product.module.css";
import moikaMap from "../../../assets/svg/moikaMap.svg";
import CustomButton from "../../../UI/CustomButton";
const Product = () => {
  return (
    <section className={css.produck}>
      {ProductMap.map((b, idx) => {
        return (
          <div key={idx}>
            {ProductMap.map((product, index) => (
              <div className={css.product_card} key={index}>
                {[...Array(8)].map((_, innerIndex) => (
                  <div key={innerIndex}>
                    <div>
                      <img src={moikaMap} alt="" />
                    </div>
                    <div>
                      <h5>{product.name}</h5>
                      <p style={{marginTop: "3px"}}>{product.description}</p>
                      <h4 style={{marginBottom: "16px", marginTop: "3px"}}>{product.price}</h4>
                    </div>
                    <CustomButton />
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
};

export default Product;
