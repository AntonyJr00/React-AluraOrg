import "./Equipo.css";
import React from "react";
import Colaborador from "../Colaborador/colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = ({
  equipo,
  colaboradores,
  eliminarColaborador,
  actualizarColor,
  setModalIsOpen,
  setUid,
  followButton,
}) => {
  const { id, titulo, firstColor } = equipo;
  const secondColor = hexToRgba(firstColor, "0.7");
  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={{ backgroundColor: secondColor }}>
          <input
            type="color"
            className="inputColor"
            defaultValue={firstColor}
            style={{ backgroundColor: firstColor }}
            onChange={(e) => {
              actualizarColor(e.target.value, id);
            }}
          />
          <h3
            className="title"
            style={{ borderBottom: `4px solid ${firstColor}` }}
          >
            {titulo}
          </h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador) => (
              <React.Fragment key={colaborador.id}>
                <Colaborador
                  colaboradores={colaborador}
                  backgroundColor1={firstColor}
                  eliminarColaborador={eliminarColaborador}
                  setModalIsOpen={setModalIsOpen}
                  setUid={setUid}
                  followButton={followButton}
                />
              </React.Fragment>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
