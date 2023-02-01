import "./style.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function Forms({ listTransactions, setListTransactions }) {

  const [description, setDescriptionInput] = useState('')
  const [value, setValueInput] = useState(0)
  const [method, setMethodSelect] = useState('')

  function criarCard() {
    let data = {
      description: description,
      type: method,
      value: value,
      id: uuid()
    }

    setListTransactions([...listTransactions, data])
    console.log(listTransactions);
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="descricao">Descrição</label>
        <input
          onChange={(e) => setDescriptionInput(e.target.value)}
          type="text"
          name="descricao"
          id="descricao"
          placeholder="Digite a descrição"
        />

        <div>
          <div className="input__container">
          <label htmlFor="valor">Valor</label>
          <input
            onChange={(e) => setValueInput(+e.target.value)}
            type="number"
            name="value"
            id="valor"
            placeholder="Digite o valor"
          />
          </div>
          <div className="input__container">
          <label htmlFor="method">Tipo de valor</label>
          <select name="metodo" id="method" onChange={(e) => setMethodSelect(e.target.value)}>
            <option value="0">Escolha uma opção</option>
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
          </div>
        </div>

        <button onClick={criarCard}>Inserir Valor</button>
      </form>
    </>
  );
}

export default Forms;
