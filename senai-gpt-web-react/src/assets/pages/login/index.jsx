import "./login.css";

function Login() {


  return (
    <>
      <header></header>

      <main className="page-container">
        <div className="robo-image">
        </div>
        <div className="login-container">
          <img className="logo" src="../assets/Chat.png" alt="Senaigpt logo" />
          <h1 style={{ fontSize: '76px' }} id="meutitulo" className="titulo">Login</h1>
          <input className="inpt" type="email" placeholder="Insira seu email" />
          <input className="inpt" type="password" placeholder="Insira sua senha" />
          <button className="btn">Entrar</button>
        </div>
      </main>
      <footer></footer>

    </>
  )
}

export default Login;
