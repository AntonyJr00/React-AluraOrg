import { useState } from "react";

import Formulario from "./componentes/Formulario/Formulario";
import Header from "./componentes/Header/Header";
import MiOrg from "./componentes/MiOrg/MiOrg";
import Equipo from "./componentes/Equipo/Equipo";
import Footer from "./componentes/Footer/Footer";

import "./App.css";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";

console.log(Header);

function App() {
  const [uid, setUid] = useState("");
  const [viewForm, viewFormState] = useState(!true);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Programacion",
      foto: "https://github.com/AntonyJr00.png",
      nombre: "Antony Rodriguez",
      puesto: "Desarrollador Web y Diseño",
      fav: true,
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: true,
    },
    {
      id: uuidv4(),
      equipo: "Programacion",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false,
    },
  ]);

  const [equipos, setEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programacion",
      firstColor: "#57c278",
      secundaryColor: "#d9f7e9",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      firstColor: "#82cffa",
      secundaryColor: "#e8f8ff",
    },
    {
      id: uuidv4(),
      titulo: "Data-Science",
      firstColor: "#a6d157",
      secundaryColor: "#f0f8e2",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      firstColor: "#e06b69",
      secundaryColor: "#fde7e8",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      firstColor: "#db6ebf",
      secundaryColor: "#fae9f5",
    },
    {
      id: uuidv4(),
      titulo: "Mobile",
      firstColor: "#ffba05",
      secundaryColor: "#fff5d9",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      firstColor: "#ff8a29",
      secundaryColor: "#ffeedf",
    },
  ]);

  const viewFormClick = () => viewFormState(!viewForm);

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaboradores);
    setColaboradores([...colaboradores, colaborador]);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const eliminarColaborador = (id) => {
    console.log("Identificador__:", id);
    console.log(
      "Colaboradressss",
      colaboradores.map((e) => e.id)
    );

    const nuevosColaboradores = colaboradores.filter(
      (colab) => colab.id !== id
    );
    setColaboradores(nuevosColaboradores);
    setModalIsOpen(false);
  };

  const actualizarColor = (color, id) => {
    console.log("AColor: ", color, "Identificador: ", id);
    const actualizarEquipos = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.firstColor = color;
      }
      return equipo;
    });
    setEquipos(actualizarEquipos);
  };

  const crearEquipos = (nuevosEquipo) => {
    console.log(nuevosEquipo);
    setEquipos([...equipos, { ...nuevosEquipo, id: uuidv4() }]);
  };

  const followButton = (id) => {
    console.log("Like : ", id);
    const follow = colaboradores.map((colaborador) => {
      if (colaborador.id === id) colaborador.fav = !colaborador.fav;
      return colaborador;
    });
    setColaboradores(follow);
  };

  return (
    <>
      <div className="App">
        <div>
          <Header />
          {viewForm && (
            <Formulario
              equipos={equipos.map((e) => e.titulo)}
              registrarColaborador={registrarColaborador}
              crearEquipos={crearEquipos}
            />
          )}
          <MiOrg changeForm={viewFormClick} />
          {equipos.map((elemento, index) => (
            <Equipo
              key={index}
              equipo={elemento}
              colaboradores={colaboradores.filter(
                (colaborador) => colaborador.equipo === elemento.titulo
              )}
              eliminarColaborador={eliminarColaborador}
              actualizarColor={actualizarColor}
              setModalIsOpen={setModalIsOpen}
              setUid={setUid}
              followButton={followButton}
            />
          ))}
          <Modal
            className="modal"
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Confirm delete modal"
          >
            <div className="modal-box modalMove-down">
              <h2>Estas seguro que deseas eliminar a este usuario?</h2>
              <div className="buttons">
                <button onClick={() => eliminarColaborador(uid)}>
                  eliminar
                </button>
                <button onClick={() => setModalIsOpen(false)}>cancelar</button>
              </div>
            </div>
          </Modal>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
export default App;
