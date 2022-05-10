import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ExtractDashboard from "../components/ExtractDashboard";
import MainContent from "../components/MainContent";
import { mainContext } from "../provider/mainProvider";

const URL = process.env.REACT_APP_SERVER;

const ExtractPage = () => {
  const { token } = useContext(mainContext);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);

  const getPages = async () => {
    await axios.get(URL + '/purchase', { headers: { authorization: token } })
      .then(({ data }) => setTotalPages(Math.round(data.length / 15)));
  }

  const renderPageButtons = () => {
    const elements = [];

    for (let index = 0; index < totalPages; index += 1) {
      elements.push(
        <button
          className={ `${page === index ? 'page-bot-active' : ''}` }
          onClick={ () => setPage(index) }
        >
          { index }
        </button>
      )
    }

    return elements;
  }

  useEffect(() => {
    getPages();
  }, [])

  return (
    <div className="page-home">
      <div className="gradient-home" />
      <MainContent>
        <div className="main-title-container">
          <h1 className="hero-title login-title">Extrato</h1>
          <div className="extract-page">
            <ExtractDashboard page={ page } />
          </div>
          <div className="page-buttons">
            { totalPages > 0 && renderPageButtons() }
          </div>
        </div>
      </MainContent>
    </div>
  )
}

export default ExtractPage;
