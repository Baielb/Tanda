import css from "./CustomButton.module.css";
const CustomButton = () => {
  return (
    <div>
      <button className={css.button}>Купить сейчас</button>
    </div>
  );
};

export default CustomButton;
