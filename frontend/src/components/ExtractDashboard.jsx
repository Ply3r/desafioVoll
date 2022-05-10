import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { mainContext } from "../provider/mainProvider";

const URL = process.env.REACT_APP_SERVER

const ExtractDashboard = ({ page }) => {
  const { token } = useContext(mainContext);
  const [history, setHistory] = useState();

  const getHistory = async () => {
    await axios.get(URL + `/purchase${page ? `?page=${page}` : ''}`, { headers: { authorization: token } })
      .then(({ data }) => setHistory(data))
      .catch(() => { })
  }

  const renderRows = () => {
    const elements = history.map((data, index) => {
      const pageIndex = page ? page - 1 : 0;
      const extractData = new Date(data.createdAt);

      return (
        <tr>
          <td>{ index + 1 + (pageIndex * 15) }</td>
          <td>{ data.product.name }</td>
          <td>{ `R$ ${data.product.price.toFixed(2)}` }</td>
          <td>{ extractData.toUTCString() }</td>
        </tr>
      )
    });

    return elements;
  }

  useEffect(() => {
    getHistory();
  }, [page])

  return (
    <div>
      <h1 className="login-title">Extrato</h1>
      <div className="extract-dashboard">
        <table>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Data</th>
          </tr>
          { history && renderRows() }
        </table>
      </div>
    </div>
  )
}

export default ExtractDashboard;
