#SenaiGPT React

1.  Verificar a versão do Node v20 instalado.

![image](https://github.com/user-attachments/assets/df3ad816-c918-42f2-b50c-e2d9823ea66c)

2. Adicionar o recurso npm conforme a imagem abaixo
![image](https://github.com/user-attachments/assets/aae73fd5-1632-4a65-b489-0a485cd895ae)

3. Executar o codigo acima digitado.
![image](https://github.com/user-attachments/assets/89ec31dc-aaab-44ea-81f1-005b80affdc2)

4. Executar npm install e npm run dev.
   -  No cmd "cd"
   -  No cmd "code . "
   - Abrirá o VsCode com a pasta "SENAI-GPT-WEB-REACT"
  ![image](https://github.com/user-attachments/assets/27f5818c-0974-4289-a864-150b35daf84c)

    Executar npm install
- ![image](https://github.com/user-attachments/assets/0d897554-f68e-4907-ba46-db93c1edc0be)
  
   Executar npm run dev

  ![image](https://github.com/user-attachments/assets/55689d3a-0cf5-4754-896c-51bdab1a43f5)

![image](https://github.com/user-attachments/assets/f586fac5-3aca-42b2-822f-48eb55fe465e)


Após a instalação dos arquivos acima foi feita a transcrição dos arquivos HTML e CSS para JSX.

Segue abaixo as principais diferenças nas linguagens.


Diferenças entre HTML/CSS e JSX

Elemento Raiz Único: JSX exige um único elemento pai. Use <div> ou <> para envolver múltiplos elementos.

JSX (Correto):

JavaScript

<div>
  <h1>Título</h1>
  <p>Parágrafo.</p>
</div>
Atributos vs. Propriedades: Atributos HTML com hífens viram camelCase em JSX (class vira className, for vira htmlFor).

JSX:

JavaScript

<div className="container">
  <label htmlFor="username">Nome:</label>
  <input type="text" id="username" />
</div>
Expressões JavaScript: Insira código JS com {} dentro do JSX para lógica dinâmica.

JSX:

JavaScript

const nome = "Usuário";
return <p>Olá, {nome}!</p>;
Estilos Inline: Use um objeto JavaScript (camelCase para propriedades CSS).

JSX:

JavaScript

const estilo = { backgroundColor: 'blue', color: 'white' };
return <div style={estilo}>Texto</div>;
Comentários: Use {/* ... */} para comentários dentro do JSX.

JSX:

JavaScript

<div>
  {/* Comentário aqui */}
  <p>Texto</p>
</div>
Auto-fechamento: Tags sem conteúdo precisam de auto-fechamento (<input />, <br />).

JSX:

JavaScript

<input type="text" />
Criação do Botão Login via JavaScript (React/JSX )
JavaScript

import Login from "./assets/pages/login";


function App() {


  return (
    <>
      <Login/>;
      </>
      )
}

      export default App;



Realizar a instalacao da aplicacao react-router-dom

![image](https://github.com/user-attachments/assets/c5c0a9b5-dc4a-4c9a-9939-fc86127df9c5)

Instalacao realizada com sucesso 

![image](https://github.com/user-attachments/assets/d48f85f1-7e13-47e6-a82f-bb5d3c32ac59)


informacoes adiconais ao codigo com sucesso 

![image](https://github.com/user-attachments/assets/084dbef7-37d2-49c3-90f0-6e13f2a3ae04)








