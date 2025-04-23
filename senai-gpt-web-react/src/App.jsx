import Login from "./assets/pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./assets/pages/chat";


function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>



          <Route path="/chat" element={<Chat />}></Route>
          <Route path="*" element={<h1> NOT FOUND</h1>}></Route>


          </Routes>


</BrowserRouter>
    </>
  )
}

export default App;
