import "./chat.css";
import logo from "../../imgs/Chat.png";
import example from "../../imgs/example.svg";
import iconchat from "../../imgs/iconSet.svg";
import { useEffect , useState } from "react";
import Capabilities from "../../imgs/capabi.svg";
import mic from "../../imgs/mic.svg";
import Send from "../../imgs/send.svg"


function Chat() {

  const [chats, setChats] = useState([]);
  const [chatSelecionado, setChatSelecionado] = useState(null);
  const [userMessage , setUserMessage] = useState ("")


    useEffect(() => {

      // Executada toda vez que a tela abre.
      getChats();


    }, []);

  const getChats = async () => {
    // Arrow Function
    let response = await fetch("https://senai-gpt-api.azurewebsites.net/chats", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("meuToken")
      }
    });

    console.log(response);

    if (response.ok == true) {

      let json = await response.json(); // Pegue as informações dos chats.

      setChats(json);

    } else {

      if (response.status == 401) {

        alert("Token inválido. Faça login novamente.");
        window.location.href = "/login";

      }

    }

  }

  const onLogOutClick = () => {

    localStorage.clear();
    window.location.href = "/login";

  }
  const clickChat = (chat) => {

    setChatSelecionado(chat);

    console.log(chat)

  }
  const chatGPT = async (message) => {

    // Configurações do endpoint e chave da API
    const endpoint = "https://ai-testenpl826117277026.openai.azure.com/";
    const apiKey = "DCYQGY3kPmZXr0lh7xeCSEOQ5oiy1aMlN1GeEQd5G5cXjuLWorWOJQQJ99BCACYeBjFXJ3w3AAAAACOGol8N";
    const deploymentId = "gpt-4"; // Nome do deployment no Azure OpenAI
    const apiVersion = "2024-05-01-preview"; // Verifique a versão na documentação

    // URL para a chamada da API
    const url = `${endpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`;

    // Configurações do corpo da requisição
    const data = {
        messages: [{ role: "user", content: message }],
        max_tokens: 50
    };

    // Cabeçalhos da requisição
    const headers = {
        "Content-Type": "application/json",
        "api-key": apiKey
    };

    // Faz a requisição com fetch
    const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const result = await response.json();
        const botMessage = result.choices[0].message.content;
        
        return botMessage;
    }

}

const enviarMensagem = async (message) => {
 
  // Mostrar chat na tela.
  let Mensagem = await chatGPT(message)
  console.log("Mensagem", Mensagem);

  let userId = localStorage.getItem("meuId");

  let novaMensagemUsuario = {

      text: message,
      id: crypto.randomUUID(),
      userId: userId

  };

  let novoChatSelecionado = { ...chatSelecionado };
  novoChatSelecionado.messages.push(novaMensagemUsuario);
  setChatSelecionado(novoChatSelecionado);

  let respostaGPT = await chatGPT(message);

  let novaMensagemGPT = {

      text: respostaGPT,
      id: crypto.randomUUID(),
      userId: "chatbot"

  };

  novoChatSelecionado = { ...chatSelecionado };
  novoChatSelecionado.messages.push(novaMensagemGPT);
  setChatSelecionado(novoChatSelecionado);

  console.log("resposta", respostaGPT);

  let response = await fetch("https://senai-gpt-api.azurewebsites.net/chats/" + chatSelecionado.id, {
      method: "PUT",
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("meuToken"),
          "Content-Type" : "application/json"
      },
      body: JSON.stringify(
          novoChatSelecionado
      )
  });

  if (response.ok == false) {

      console.log("Salvar o chat deu errado.");

  }

}
 const novoChat =  async() => {
  let novoTitulo = prompt ("Insira o titulo do chat:");
  if (novoTitulo == null || novoTitulo == "") {

    alert("Insira um titulo");
     return; // faz o codigo parar de ser executado
  }

  let userId = localStorage.getItem("meuId");

 let nChat ={

  chatTitle: novoTitulo,
  id: crypto.randomUUID(),
  userId: userId,
  messages: [],

 }
 
 let response = await fetch("https://senai-gpt-api.azurewebsites.net/chats", {
  method: "POST",
  headers: {
      "Authorization": "Bearer " + localStorage.getItem("meuToken"),
      "Content-Type" : "application/json"
  },
  body: JSON.stringify(
      nChat
  )
});

if (response.ok) {

  await getChats();
}

}



  return (
    <>
      <div className="container">

        <header className="left-panel">

          <div className="top">

            <button className="btn-new-chat"onClick={() => novoChat()} > + New chat</button>

            {chats.map(chat => (
              <button className="btn-chat" onClick={() => clickChat(chat)}>

                <img src={iconchat} alt="ícone de chat." />

                {chat.chatTitle}
              </button>
            ))}

          </div>

          <div className="bottom">

            <button className="btn-chat">
              <img src={iconchat} alt="ícone de chat." />
              Clear conversations</button>

            <button className="btn-chat">
              <img src={iconchat} alt="ícone de chat." />
              Light mode</button>


            <button className="btn-chat">
              <img src={iconchat} alt="ícone de chat." />
              My account</button>


            <button className="btn-chat">

              <img src={iconchat} alt="ícone de chat." />
              Updates & FAQ</button>


            <button className="btn-chat" onClick={() => onLogOutClick()}>
              <img src={iconchat} alt="ícone de chat." />
              Log out</button>

          </div>

        </header>

        <main className="central-panel">
          {chatSelecionado == null && ( // Usuario nao clicou em nada 


            <>
              <div className="chat-logo">
                <img src={logo} alt="Logo do SenaiGPT." />
              </div>

              <div className="dicas-container">



                <div className="dicas-item">

                  <h2>
                    <img src={example} alt="Example icon." />
                    Examples
                  </h2>

                  <p>Explique como um computador quântico funciona.</p>
                  <p>Explique como um computador quântico funciona.</p>
                  <p>Explique como um computador quântico funciona.</p>

                </div>

                <div className="dicas-item">

                  <h2>
                    <img src={Capabilities} alt="Capabilities" />
                    Capabilities
                  </h2>

                  <p>Explique como um computador quântico funciona.</p>
                  <p>Explique como um computador quântico funciona.</p>
                  <p>Explique como um computador quântico funciona.</p>

                </div>

                <div className="dicas-item">

                  <h2>
                    <img src={example} alt="Example icon." />
                    Limitations
                  </h2>

                  <p>Explique como um computador quântico funciona.</p>
                  <p>Explique como um computador quântico funciona.</p>
                  <p>Explique como um computador quântico funciona.</p>

                </div>

              </div>


            </>

          )}

          {chatSelecionado != null && (
            <>


              <div className="chat-container">


                <div className="chat-header">

                  <h2> {chatSelecionado.chatTitle}</h2>

                </div>

                <div className="chat-messages">

                  {chatSelecionado.messages.map(message => (


                    <p className={"message-item " + (message.userId == "chatbot" ? "chatbot" : "")} >{message.text}</p>
                  )



                  )}

                </div>


              </div>




            </>



          )}


          <div className="input-container-1">

            <img src={mic} alt="Microphone." />
            <img src={Send} alt="send." />


            <input value={userMessage}

              onChange={event => setUserMessage(event.target.value)}

            input placeholder="Type a message."
            type="text" 
             
             />

            <img onClick={() => enviarMensagem(userMessage)} src= {Send} 
            alt="Send." />

          </div>

        </main>

      </div>
    </>
  )

};

export default Chat;