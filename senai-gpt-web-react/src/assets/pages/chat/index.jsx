import React from 'react';
import './chat.css';
import '../..';
import iconSet from "../../imgs/IconSet.svg"
import chat from 
import iconset1 from 
import iconset2 from 
import iconset3 from 
import microphone from 
import send from 

function Chat() {
  return (
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>chat - SENAIGPT</title>
        <link rel="stylesheet" href="chat.css" />
        <link rel="stylesheet" href="../styles/global.css" />
      </head>
      <body>
        <div className="container">
          <header className="left-panel">
            <div className="top">
              <button className="btn-new-chat">+ New chat</button>
              <button className="btn-chat">
                <img src={iconSet} alt="icone de chat" />
                AI chat Tool Ethics
              </button>
              <button className="btn-chat">
                <img src={iconSet} alt="icone de chat" />
                AI chat Tool Impact Writing
              </button>
              <button className="btn-chat">
                <img src={iconSet} alt="icone de chat" />
                AI chat Tool Ethics
              </button>
              <button className="btn-chat">
                <img src={iconSet} alt="icone de chat" />
                New chat
              </button>
            </div>
            <div className="bottom">
              <button>Clear conversations</button>
              <button>Light mode </button>
              <button>Clear conversations</button>
              <button> My account </button>
              <button>Update & FAQ </button>
              <button> Log out</button>
            </div>
          </header>
          <main className="central-panel">
            <img src={chatImage} alt="logo" />
            <div className="textos">
              <h2>
                <img src={exampleIcon} alt="icone" />
                Examples
                <div className="coluna-1">
                  <h1>Explain quantum computing insimple terms</h1>
                  <h1>Explain quantum computing insimple terms</h1>
                  <h1>Explain quantum computing insimple terms</h1>
                </div>
              </h2>
              <h2>
                <img src={capabilitiesIcon} alt="icone2" />
                Capabilities
                <div className="coluna-1">
                  <h1>Explain quantum computing insimple terms</h1>
                  <h1>Explain quantum computing insimple terms</h1>
                  <h1>Explain quantum computing insimple terms</h1>
                </div>
              </h2>
              <h2>
                <img src={limitationsIcon} alt="icone3" />
                Limitations
                <div className="coluna-1">
                  <h1>Explain quantum computing insimple terms</h1>
                  <h1>Explain quantum computing insimple terms</h1>
                  <h1>Explain quantum computing insimple terms</h1>
                </div>
              </h2>
            </div>
            <div className="input-container-1">
              <img src={microphoneIcon} alt="microfone" />
              <img src={iconSet} alt="image" />
              <input placeholder="Type a message." type="text" />
              <img src={sendIcon} alt="send" />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

export default Chat;