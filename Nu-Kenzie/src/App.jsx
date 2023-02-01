import { useState } from "react";
import illustrationHome from "./assets/Illustration.png";
import nuKenzieLogo from "./assets/Nu Kenzie.png";
import nuKenzieDark from "./assets/NuKenzie.png";
import "./styles/reset.css";
import "./styles/globalStyles.css";
import "./App.css";
import "./index.css";
import Forms from "./components/Form";
import List from "./components/List";
import Cards from "./components/Cards";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [page, setPage] = useState("index");

  function changePage() {
    page == "index" ? setPage("home") : setPage("index");
  }

  
  
  return (
    <div className="App">
      {page == "index" ? (
        <div className="index-black">
          <header className="indexPage">
            <img src={nuKenzieDark} alt="logoKenzie" />
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button onClick={changePage}>Iniciar</button>
          </header>

          <img src={illustrationHome} alt="Ilustração de página" />
        </div>
      ) : (
        <>
          <header className="homePage">
            <img src={nuKenzieLogo} alt="logoKenzie" />
            <button onClick={changePage}>Início</button>
          </header>

          <main>
            <section className="forms">
              <Forms
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </section>
            <section className="list_transactions">
              <h2>Resumo financeiro</h2>
              <ul>
                <List
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                />
              </ul>
            </section>
          </main>
        </>
      )}
    </div>
  );
  
}

export default App;
