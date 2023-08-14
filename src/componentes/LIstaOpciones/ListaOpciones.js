import "./ListaOpciones.css";
import { v4 as uuidv4 } from "uuid";

const ListaOpciones = ({ equipos, selectValue, changeSelect, opciones }) => {
  const getValueSelect = (e) => {
    changeSelect(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>{equipos}</label>
      <select
        onChange={getValueSelect}
        title="Seleccione en que equipo quiere pertenecer"
        value={selectValue}
      >
        <option value="" disabled defaultValue="" hidden>
          Seleccionar Equipo
        </option>
        {opciones.map((equipo, index) => (
          <option key={uuidv4()} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
