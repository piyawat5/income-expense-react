import Item from "./Item";
import "./Transaction.css";

const Transaction = (props) => {
  const { items, removeTodo } = props;

  return (
    <div className="transaction">
      <ul>
        {items.map((element, index) => {
          return (
            <Item
              {...element}
              key={element.id}
              onClickRemove={() => removeTodo(index)}
            />
          ); //key={element.id} สามารถเปลี่ยนได้เป็น {index} จาก map //ต้องมีทั้ง key ทั้ง id *****
        })}
      </ul>
    </div>
  );
};
export default Transaction;
