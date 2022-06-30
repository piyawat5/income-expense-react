import "./Item.css";
import PropTypes from "prop-types"; //package

const Item = (props) => {
  //ค่าที่ส่งมาจะเก็บลงในตัวแปร title,amount และชื่อต้องเหมือนกันกับในobjectด้วย
  const { amount, title, onClickRemove } = props;
  const status = amount < 0 ? "expense" : "income"; //เทคนิค การใช้className
  const plus = amount >= 0 ? "+" : "-";
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  //ถ้าอยากให้ค่าเป็น + ต้องใส่ Math.abs()
  return (
    <li className={status} onClick={onClickRemove}>
      {title}
      <span>
        {plus}
        {formatNumber(Math.abs(amount))}
      </span>
    </li>
  );
};
Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
