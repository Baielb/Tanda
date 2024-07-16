import ReviewsMap from "../../../utils/ReviewsMap/ReviewsMap";
import css from "./Reviews.module.css";
import fourZvezda from "../../../assets/svg/fourzvezda.svg";


const Reviews = () => {
  return (
    <section className={css.reviews}>
      <div className={css.review_cards}>
        {ReviewsMap.map((review, i) => (
          <div className={css.reviews_otzyv} key={i}>
            <div className={css.review_card}>
              <div style={{display: "flex", alignItems: "center"}}>
                <div className={css.circle}></div>
                <div>
                  <h5>{review.name}</h5>
                  <p>17 мая 2023, 20:46</p>
                </div>
              </div>
              <div>
                <img src={fourZvezda} alt="" />
              </div>
            </div>
            <div>
                <p style={{marginTop: "16px"}}>{review.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
