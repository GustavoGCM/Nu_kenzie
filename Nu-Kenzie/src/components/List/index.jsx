import Cards from "../Cards";
import "./styles.css";

function List({ listTransactions, setListTransactions }) {
  function removeItem(e) {
    const finded = listTransactions.find((list) => list.id == e.target.id);
    const index = listTransactions.indexOf(finded)
    setListTransactions(
      listTransactions.filter(item => item != finded)
    );
    console.log(index);
  }
  
  return (
    <>
      {listTransactions.map((list) => {
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
        })}
    </>
  );
}

export default List;
