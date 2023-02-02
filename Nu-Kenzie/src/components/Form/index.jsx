import "./style.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function Forms({ listTransactions, setListTransactions }) {
  const [description, setDescriptionInput] = useState("");
  const [value, setValueInput] = useState(0);
  const [method, setMethodSelect] = useState("");

  function createCard() {
    let data = {
      description: description,
      type: method,
      value: value,
      id: uuid(),
    };

    data.description.length == 0 || data.type == 0 || data.value == 0
      ? alert("Preencha os campos!")
      : setListTransactions([...listTransactions, data]);
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="description">Descrição</label>
        <input
          onChange={(e) => setDescriptionInput(e.target.value)}
          type="text"
          name="description"
          id="description"
          placeholder="Digite a descrição"
          required
        />

        <div>
          <div className="input__container">
            <label htmlFor="value">Valor</label>
            <input
              onChange={(e) => setValueInput(+e.target.value)}
              type="number"
              name="value"
              id="value"
              placeholder="Digite o value"
              required
            />
          </div>
          <div className="input__container">
            <label htmlFor="method">Tipo de valor</label>
            <select
              name="method"
              id="method"
              required
              onChange={(e) => setMethodSelect(e.target.value)}
            >
              <option value="0">Escolha uma opção</option>
              <option value="entrada">Entrada</option>
              <option value="saída">Saída</option>
            </select>
          </div>
        </div>

        <button onClick={createCard}>Inserir Valor</button>
      </form>
    </>
  );
}

export default Forms;
