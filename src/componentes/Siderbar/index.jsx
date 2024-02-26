import Logo from "./assents/LOGO.svg";
import Feed from "./assents/feed.svg";
import account from "./assents/account.svg";
import info from "./assents/info.svg";
import logout from "./assents/logout.svg";
import "./style.css";

export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo CODECONNECT" />
      <nav>
        <ul className="list-sidebar">
          <li>
            <a href="#" className="btn-publish">
              Publicar
            </a>
          </li>
          <li>
            <a href="#" className="item-link activo">
              <img src={Feed} alt="" />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#" className="item-link">
              <img src={account} alt="Perfil" />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className="item-link">
              <img src={info} alt="Nós" />
              <span>Sobre nós</span>
            </a>
          </li>
          <li>
            <a href="#" className="item-link">
              <img src={logout} alt="Sair" />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
