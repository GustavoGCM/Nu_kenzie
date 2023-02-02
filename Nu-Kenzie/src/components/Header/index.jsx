import "./style.css";

function Header({ logo, changePage }) {
  return (
    <>
      <div className="header__container">
        <header className="homePage">
          <img src={logo} alt="logoKenzie" />
          <button onClick={changePage}>Início</button>
        </header>
      </div>
    </>
  );
}

export default Header;
