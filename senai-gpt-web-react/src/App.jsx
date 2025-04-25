import Login from "./assets/pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./assets/pages/chat";


function App() {


  // metodo para verificar se o usuario esta logado,caso o usuario nao esteja logado será negado o acesso. 
  // Não esquecer de chamar o elemento,apenas declarar nao irá trazer alteracoes no codigo .

  const isAuthenticated = () => {


    let token = localStorage.getItem("meuToken");

    if (token == null) {

      return false;

    } else {

      return true;
    }
  }

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>



          <Route path="/chat" element={isAuthenticated() == true? <Chat/> : <h1>Seu hacker safado,cai fora  </h1>}></Route>
{/* no lugar de h1 podemos colocar o caminho  <login/> para enviar o usuario para pagina de login novamente */}
      
          <Route path="*" element={<h1> NOT FOUND</h1>}></Route>


        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App;
