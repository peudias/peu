import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const originalTitle = document.title; // Armazena o título original ao carregar o componente

    // Função para mudar o título quando o usuário sai da aba
    const onBlur = () => {
      document.title = "Volta por favor ☹️";
    };

    // Função para restaurar o título quando o usuário volta para a aba
    const onFocus = () => {
      document.title = originalTitle;
    };

    // Adiciona os event listeners
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);

    // Remove os event listeners quando o componente é desmontado
    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, []); // O array vazio indica que este efeito não depende de nenhuma prop ou estado, então ele roda apenas uma vez após o primeiro render.

  return <h1>careca, je t'aime 🥰</h1>;
}

export default Home;


// let docTitle = document.title;
// window.addEventListener("blur", () => {
//  document.title = "Volta por favor ☹️";
//})

// window.addEventListener("focus", () => {
//  document.title = docTitle;
// })

// function Home() {
//   return <h1> careca, je t'aime 🥰</h1>;
// }

// export default Home;