import "./MiOrg.css";

const MiOrg = ({ changeForm }) => {
  return (
    <section className="org-section">
      <h3 className="titulo">Mi Organizacion</h3>
      <img src="./img/add.png" alt="add" onClick={changeForm} />
    </section>
  );
};

export default MiOrg;
