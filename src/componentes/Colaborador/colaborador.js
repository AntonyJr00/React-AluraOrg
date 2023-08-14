import "./colaborador.css";
import { IoMdTrash } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = ({
  colaboradores,
  backgroundColor1,
  setModalIsOpen,
  setUid,
  followButton,
}) => {
  const { fav } = colaboradores;
  return (
    <div className="colaborador">
      <div className="encabezado" style={{ backgroundColor: backgroundColor1 }}>
        <IoMdTrash
          className="taskDelete"
          onClick={() => {
            setModalIsOpen(true);
            setUid(colaboradores.id);
          }}
        />

        <img src={colaboradores.foto} alt="PictureGitHub" />
      </div>
      <div className="info">
        <h4 className="info-title">{colaboradores.nombre}</h4>
        <h5 className="info-puesto">{colaboradores.puesto}</h5>
        <div className="info-heart">
          {fav ? (
            <AiFillHeart onClick={() => followButton(colaboradores.id)} />
          ) : (
            <AiOutlineHeart onClick={() => followButton(colaboradores.id)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
