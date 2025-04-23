function Chat(){

    return (

        <>
        <main className="page-container">
                  <div className="robo-image">
                    {/* You might want to add an image or other content here */}
                  </div>
                  <div className="login-container">
                    <img className="logo" src={logo} alt="Senaigpt logo" />
                    <h1 style={{ fontSize: '76px' }} id="meutitulo" className="titulo">Login</h1>
        
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
        </>
    )

};

export default Chat ;



