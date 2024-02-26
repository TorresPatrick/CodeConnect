import "./style.css";
export default function Filter() {
  return (
    <section className="container-filter">
      <ul className="list-filter">
        <li className="filter-activo">Front-end</li>
        <li className="item-filter">React</li>
        <li className="item-filter">Acessibilidade</li>
      </ul>

      <button className="btn-clear">Limpar tudo</button>
    </section>
  );
}
