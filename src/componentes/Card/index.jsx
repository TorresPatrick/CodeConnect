import "./style.css";
import Chat from "./assents/chat.svg";
import Share from "./assents/share.svg";
import Code from "./assents/maiormenor.svg";

export default function Card({
  id,
  imagemUrl,
  titulo,
  resumo,
  linhasDeCodigo,
  compartilhamento,
  comentarios,
  usuario,
}) {
  return (
    <article className="card">
      <div className="card-imagem">
        <img src={imagemUrl} />
      </div>

      <div className="card-content">
        <div className="card-text">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>
      </div>

      <div className="content-footer">
        <ul>
          <li>
            <img src={Code} alt="" />
            {linhasDeCodigo}
          </li>
          <li>
            <img src={Share} alt="" />
            {compartilhamento}
          </li>
          <li>
            <img src={Chat} alt="" />
            {comentarios}
          </li>
        </ul>

        <div className="footer-user">
          <img src={usuario.imagem} alt="" />
          {usuario.nome}
        </div>
      </div>
    </article>
  );
}
