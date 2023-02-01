import lixeira from "/src/assets/trash.png";
import "./styles.css";
import List from "../List";
import App from "../../App";

function Cards({ list, id, removeItem }) {

  return (
    <>
      {list.type == "entrada" ? (
        <li className="enter" id={id}>
          <div>
            <h2>{list.description}</h2>
            <p>{list.type}</p>
          </div>

          <div className="remove__container">
            <p>R$ {list.value},00</p>
            <img
              src={lixeira}
              alt="excluir"
              id={id}
              onClick={(e) => removeItem(e)}
            />
          </div>
        </li>
      ) : (
        <li className="exit" id={id}>
          <div>
            <h2>{list.description}</h2>
            <p>{list.type}</p>
          </div>

          <div className="remove__container">
            <p>R$ {list.value},00</p>
            <img
              src={lixeira}
              alt="excluir"
              id={id}
              onClick={(e) => removeItem(e)}
            />
          </div>
        </li>
      )}
    </>
  );
}

export default Cards;
