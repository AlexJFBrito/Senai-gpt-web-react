import "./login.css";
import { useState } from "react";
import logo from "../../imgs/Chat.png";
// import { HttpProxy } from "vite"; // HttpProxy não é necessário para esta lógica de login no frontend

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = async () => {

    if (email == "" || password == "") {

      alert("Falta o e-mail.");
      return;

    }

    let response = await fetch("https://senai-gpt-api.azurewebsites.net/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST", // Método que envia dados.
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    console.log(response);


    if (response.ok == true) {


      alert("Login realizado com sucesso !");

      console.log(response);
      let json = await response.json();

    let token = json.accessToken;
    
    console.log("Token: " + token);

    //LocalStorage

    localStorage.setItem("meuToken" , token);
    

    //Cookies
    //function setCookie(name, value, days) {
      //const date = new Date();
      //date.setTime(date.getTime() + (days * 24 *60 *60 *1000));
      //const expires = "expires=" + date.toUTCString();
      //document.cookie = `${name} =$ {value}; ${expires}; path =/`;
    //}

    //setCookie("meuToken", token, 7);

    window.location.href = "/chat";

    } else {
      if (response.status == 401) {

        alert("Credenciais incorretas. Tente novamente.");

      } else {
        alert("Erro inesperado aconteceu, caso persista, contate os administradores.")

      }

      }

    }


    return (
      <>
        <header></header>

        <main className="page-container">
          <div className="robo-image">
            {/* You might want to add an image or other content here */}
          </div>
          <div className="login-container">
            <img className="logo" src={logo} alt="Senaigpt logo" />
            <h1 style={{ fontSize: '76px' }} id="meutitulo" className=" login-titulo">Login</h1>

            <input
              className="inpt"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Insira seu email"
            />
            <input
              className="inpt"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Insira sua senha"
            />
            <button className="btn" onClick={onLoginClick}>Entrar</button>
          </div>
        </main>
        <footer></footer>
      </>
    );
  }

  export default Login;