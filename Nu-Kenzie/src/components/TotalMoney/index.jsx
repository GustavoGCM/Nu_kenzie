import "./style.css";

function TotalMoney({ listTransactions }) {
  const totalValue = listTransactions.reduce((acumulador, mainValue) => {
    return mainValue.type == "entrada"
      ? acumulador + mainValue.value
      : acumulador - mainValue.value;
  }, 0);

  return (
    <>
      <footer>
        <div>
          <p>Valor total:</p>
          <span>O valor se refere ao saldo</span>
        </div>
        <p className="value">R$ {totalValue},00</p>
      </footer>
    </>
  );
}

export default TotalMoney;
