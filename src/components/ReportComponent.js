import DataContext from "../data/DataContext";
import "./ReportComponent.css";
import { useContext } from "react";
const ReportComponent = () => {
  //const name = useContext(DataContext) //{name.income}วิธีแรก
  const { income, expense } = useContext(DataContext);
  //ขั้นตอนสุดท้าย ของโปรเจคนี้คือการ formatNumber
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <div>
      <h4>ยอดคงเหลือ (บาท)</h4>
      <h1>{formatNumber((income - expense).toFixed(2))}</h1>
      <div className="report-container">
        <div className="text-plus">
          <h4>รายรับทั้งหมด</h4>
          <p>{formatNumber(income)}</p>
        </div>
        <div className="text-minus">
          <h4>รายจ่ายทั้งหมด</h4>
          <p>{formatNumber(expense)}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
