import css from "./Conntact.module.css";

const Contact = ({ userData: { name, number } }) => {
  return (
    <>
      <div className={css.dscr}>
        <h3>{name}</h3>
        <p>{number}</p>
      </div>
      <button type="button">Delete</button>
    </>
  );
};

export default Contact;
