import "./App.css";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import { useState, useEffect } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Title = () => {
  const design = { color: "blue", textAlign: "center", fontSize: "1.5rem" };
  return <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>;
};

function App() {
  const initData = [
    // { id: 1, title: "ค่ารักษาพยาบาล", amount: 2000 },
    // { id: 2, title: "เงินเดือน", amount: 20000 },
  ];

  const [items, setItems] = useState(initData); //สร้างstate และ กำหนดค่าเริ่มต้นเป็นอาเรย์ทั้งหมดใน ตัวแปรinitData
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  //1.สร้างpropไปหาตัวลูก onAddItem = {onAddNewItem}
  //2.const FormComponent = (props)=>{}
  //3.props.onAddItem(itemData);
  //เป็นการส่ง functionที่มี parameter เข้าไปในprop จึงจำเป็นต้องมี()ในข้อที่3 ****
  const onAddNewItem = (newItem) => {
    //ใช้ backtickไม่ได้ ใช้เป็นคอมม่าแทน****
    setItems((previous) => {
      //การcallback setItem() คือตัวที่มีอยู่ก่อนหน้า
      return [newItem, ...previous];
    });
  };
  const removeTodo = (index) => {
    let todo = [...items];

    todo.splice(index, 1);
    console.log(index);
    setItems(todo);
  };
  useEffect(() => {
    //ส่วนใหญ่useEffectจะวางไว้ล่างสุดก่อนถึง jsx
    //รวมค่า
    const amounts = items.map((item) => item.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((a, b) => a + b, 0);
    const expense =
      amounts.filter((element) => element < 0).reduce((a, b) => a + b, 0) * -1;
    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2));
  }, [items, reportIncome, reportExpense]);

  //จากเดิมที่ใน jsx <Transaction items={initData}> เปลี่ยนเป็น {items} เพราะใช้state

  //ต้องมี<Router> หุ้มด้วย
  //<Link to="/insert">บันทึกข้อมูล</Link> //ความหมายคือเมื่อผู้ใช้คลิกแล้ว path เป็น /insert ให้ componentสักตัวนึงทำงาน
  //exact คือการตั้งค่าให้หน้านั้นเป็นหน้าแรก
  return (
    <DataContext.Provider
      value={{ income: reportIncome, expense: reportExpense }}
    >
      <div className="container">
        <Title />
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <ReportComponent />
                    <Transaction items={items} removeTodo={removeTodo} />
                  </>
                }
                exact
              ></Route>
              <Route
                path="/insert"
                element={
                  <>
                    <FormComponent onAddItem={onAddNewItem} />
                    <Transaction items={items} removeTodo={removeTodo} />
                  </>
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
