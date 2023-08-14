import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../LIstaOpciones/ListaOpciones";
import ButtonCrear from "../Button/Button";

const Formulario = ({ equipos, registrarColaborador, crearEquipos }) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const manejoDeDatos = (e) => {
    e.preventDefault();
    const datosDelFormulario = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
    };
    registrarColaborador(datosDelFormulario);
  };

  const manejoDeEquipos = (e) => {
    e.preventDefault();
    crearEquipos({ titulo, firstColor: color });
  };
  return (
    <section className="contenedor">
      <form onSubmit={manejoDeDatos} className="formulario">
        <h2 className="title">
          Rellena todo el formulario para crear un colaborador
        </h2>
        <Campo
          titulo="Nombre"
          placeHolder="Ingresar Nombre"
          required
          inputValue={nombre}
          changeInput={setNombre}
        />
        <Campo
          titulo="Puesto"
          placeHolder="Ingresar Puesto"
          required
          inputValue={puesto}
          changeInput={setPuesto}
        />
        <Campo
          titulo="Foto"
          placeHolder="Ingresar Foto"
          required
          inputValue={foto}
          changeInput={setFoto}
        />
        <ListaOpciones
          equipos="Equipos"
          selectValue={equipo}
          opciones={equipos}
          changeSelect={setEquipo}
        />
        <ButtonCrear> Crear </ButtonCrear>
      </form>
      <form className="formulario" onSubmit={manejoDeEquipos}>
        <h2 className="title">
          Rellena todo el formulario para crear un colaborador
        </h2>
        <Campo
          titulo="Titulo"
          placeHolder="Ingresar Titulo"
          required
          inputValue={titulo}
          changeInput={setTitulo}
        />
        <Campo
          titulo="Color"
          placeHolder="Ingresar color en hexagesimal"
          required
          inputValue={color}
          changeInput={setColor}
          type="color"
        />
        <ButtonCrear>Registrar equipo</ButtonCrear>
      </form>
    </section>
  );
};

export default Formulario;
