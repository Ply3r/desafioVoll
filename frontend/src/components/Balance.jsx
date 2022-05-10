import { useContext, useEffect, useState } from "react";
import { mainContext } from "../provider/mainProvider";
import getDifferenceDays from '../utils/getDiferenceDays';
import '../css/menusDashboard.css';
import axios from "axios";

const URL = process.env.REACT_APP_SERVER;

const Balance = () => {
  const { user, token } = useContext(mainContext);
  const [loss30d, setloss30d] = useState(0);
  const [loss7d, setloss7d] = useState(0);

  const getHistory = async () => {
    await axios.get(URL + '/purchase', { headers: { authorization: token } })
      .then(({ data }) => {
        const extract30dHold = data.filter(getDifferenceDays(30));
        const extract7dHold = data.filter(getDifferenceDays(7));

        const loss30dHold = extract30dHold.reduce((a, b) => a + b.product.price, 0);
        const loss7dHold = extract7dHold.reduce((a, b) => a + b.product.price, 0);

        setloss30d(loss30dHold);
        setloss7d(loss7dHold);
      })
  }

  useEffect(() => {
    getHistory();
  }, [])

  return (
    <div className="balance-container">
      <h1 className="login-title">Saldo</h1>
      <div className="balance-inner-container">
        <div>
          <p>Saldo Total</p>
          <h2>{ `R$ ${user.balance.toFixed(2)}` }</h2>
        </div>
        <div>
          <p>Gastos nos ultimos 30d</p>
          <h2>{ `R$ ${loss30d.toFixed(2)}` }</h2>
        </div>
        <div style={ { 'border': 'none' } }>
          <p>Gastos nos ultimos 7d</p>
          <h2>{ `R$ ${loss7d.toFixed(2)}` }</h2>
        </div>
      </div>
    </div>
  );
};

export default Balance;
