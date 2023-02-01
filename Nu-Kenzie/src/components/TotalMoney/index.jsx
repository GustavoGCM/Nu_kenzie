import './style.css'

function TotalMoney({ listTransactions }) {
  const valorTotal = listTransactions.reduce((acumulador, valorAtual) => {
   return acumulador + valorAtual.value
  },0);

  console.log(valorTotal);

  return (
    <>
      <footer>
        <div>
          <p>Valor total:</p>
          <span>O valor se refere ao saldo</span>
        </div>
        <p className="value">R$ {valorTotal},00</p>
      </footer>
    </>
  );
}

export default TotalMoney