import { useState, useEffect } from "react";
import "./FormComponent.css";
import { v4 as uuidv4 } from "uuid";
const FormComponent = (props) => {
  //สร้างprops ขึ้นมา จาก onAddItem = {onAddNewItem}
  const [showBtn, setShowBtn] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  //useEffect เพื่อเช็คว่า title หรือ amount มีค่าว่างหรือไม่
  const [formValid, setFormValid] = useState(false);

  const inputTitle = (e) => {
    // console.log(e.target.value);

    setTitle(e.target.value);
  };
  const inputAmount = (e) => {
    // console.log(e.target.value);

    setAmount(e.target.value);
  };

  const saveItem = (e) => {
    e.preventDefault(); //ป้องกันไม่ให้กดปุ่มbutton แล้ว หน้ารีเฟรชใหม่
    // console.log("save u knowwwww");
    const itemData = {
      //1.สร้างตัวแปรเพื่อเก็บ state title, state amount

      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(itemData); //คือการส่งค่ากลับไปหาตัวแม่*****
    // console.log(itemData);
    setTitle(""); //2.เมื่อทำการส่งค่าแล้ว ให้กลับไปเป็นค่าเริ่มต้น
    setAmount("");
    //setFormValid(false);//useEffect ทุกครั้งที่กดปุ่มbutton state FormValid จะกลับเป็นfalse (ย้ายไปใส่ด้านล่างแทนแล้ว ตรง if ตัวแรก)

    //3.ไปสร้างvalueด้านล้าง
  };
  //การสร้าง useEffect
  //syntax คือ useEffect(()=>{console.log('somethings')},[stateName]);
  useEffect(() => {
    //ใช้if แทนก็ได้*** (ถ้าใช้ if set...(true หรือ false) แทน )
    const checkRemove = title.trim().length === 0 && amount === "";
    const checkData = title.trim().length !== 0 && amount !== "";
    setFormValid(checkRemove);
    setShowBtn(checkRemove);
    setFormValid(checkData);
    setShowBtn(checkData);
  }, [title, amount]); //ใส่เพื่อดักจับstateไหนบ้าง ***(ไม่ใส่จะมีค่าเท่ากับใส่ทั้งสองอัน แต่ถ้าใส่แค่ตัวใดตัวนึง อีกตัวจะไม่เข้ามา แต่ในกรณีนี้ที่ทำงานได้เพราะว่า ในเงื่อนไข if มีการระบุถึง title ) แต่ควรใส่ทั้งสองตัว ไม่งั้นreact จะขึ้น error
  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input
            type="text"
            placeholder="ระบุชื่อรายการ"
            onChange={inputTitle} //สามารถย่อได้เป็น onChange={(e)=>setTitle(e.target.value)
            value={title} //ถ้า state titleเปลี่ยน value ก็เปลี่ยนด้วย
          />
        </div>
        <div className="form-control">
          <label>จำนวนเงิน</label>
          <input
            type="number"
            placeholder="+ รายรับ , - รายจ่าย"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div className="btn">
          <button
            type="submit"
            disabled={!formValid}
            className={showBtn ? "btnActive" : null}
          >
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
