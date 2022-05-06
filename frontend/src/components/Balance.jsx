import { useContext } from "react";
import { mainContext } from "../provider/mainProvider";
import '../css/menusDashboard.css';

const Balance = () => {
  const { user } = useContext(mainContext);

  return (
    <div className="balance-container">
      <h1 className="login-title">Balance</h1>
      <div className="balance-inner-container">
        <div>
          <p>Saldo Total</p>
          <h2>{ `R$ ${user.balance.toFixed(2)}` }</h2>
        </div>
        <div>
          <p>Gastos nos ultimos 30d</p>
          <h2>{ `R$ 0.00` }</h2>
        </div>
        <div style={ { 'border': 'none' } }>
          <p>Gastos nos ultimos 7d</p>
          <h2>{ `R$ 0.00` }</h2>
        </div>
      </div>
    </div>
  );
};

export default Balance;
