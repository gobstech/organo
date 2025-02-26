import './Botao.css';

const Botao = (props) => {
  return <button className="botao-criar-card">{props.children}</button>;
};

export default Botao;
