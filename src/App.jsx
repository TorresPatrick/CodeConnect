import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Card from "./componentes/Card";
import Filter from "./componentes/Filter";
import Ordering from "./componentes/Ordenação";
import Searchbar from "./componentes/SearchBar";
import Sidebar from "./componentes/Siderbar";

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((resposta) => resposta.json())
      .then((dados) => setDados(dados));
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <div>
        <Searchbar />
        <Filter />
        <Ordering />
        <ul className="list-cards">
          {dados
            ? dados.map((item, index) => (
                <li key={index}>
                  <Card
                    id={item.id}
                    imagemUrl={item.imagem_capa}
                    titulo={item.titulo}
                    resumo={item.resumo}
                    linhasDeCodigo={item.linhas_de_codigo}
                    compartilhamentos={item.compartilhamentos}
                    comentarios={item.comentarios}
                    usuario={item.usuario}
                  />
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
