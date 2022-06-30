import React from "react";
import ReactDOM from "react-dom/client"; //คือ ไลบรารี่ ตัวนึงที่ทำงานร่วมกับreact (คือนำมาสร้าง versual dom)
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root")); //react dom ทำการเรียกใช้ component<App/> เพื่อแสดงผล ซึ่งอ้างอิงไปยังตำแหน่งที่เรียกใช้ root ก็คือ index.html(ข้างในไฟล์นั้นมีการเรียกใช้ root)
// const data = <h1>hello react</h1>; //เวลาเอาไปใช้ไม่ต้องใส่ {} เพราะไม่ใช่การ return
root.render(
  //หากต้องการใส่เพิ่มให้ใส่เข้าไปตรงparameter ( HelloComponent,<App/>)
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
