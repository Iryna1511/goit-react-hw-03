const Contact = ({ userData: { name, number } }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{number}</p>
      <button type="button">Delete</button>
    </>
  );
};

export default Contact;
