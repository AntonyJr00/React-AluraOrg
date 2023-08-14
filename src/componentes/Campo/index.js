import "./Campo.css";

const CampoTexto = ({
  titulo,
  placeHolder,
  required,
  inputValue,
  changeInput,
  type = "text",
}) => {
  const placeholderModificado = `${placeHolder}...`;
  const changeValor = (e) => changeInput(e.target.value);

  return (
    <div className="campo-input">
      <label>{titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={required}
        value={inputValue}
        onChange={changeValor}
        type={type}
      />
    </div>
  );
};

export default CampoTexto;
