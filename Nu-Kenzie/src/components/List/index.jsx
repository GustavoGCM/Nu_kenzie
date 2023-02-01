import Cards from "../Cards";
import "./styles.css";

function List({ listTransactions, setListTransactions }) {
  function removeItem(e) {
    const finded = listTransactions.find((list) => list.id == e.target.id);
    const index = listTransactions.indexOf(finded)
    setListTransactions(
      listTransactions.filter(item => item != finded)
    );
  }
  
  return (
    <>
      {listTransactions.length > 0 ? listTransactions.map((list) => {
          return (
            <Cards
              list={list}
              key={list.id}
              id={list.id}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              removeItem={removeItem}
            />  
          );
        }): <h1>Você ainda não possui nenhum lançamento</h1>}
    </>
  );
}

export default List;
