import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ userData }) => {
  return (
    <ul className={css.list}>
      {userData.map((user) => (
        <li className={css.item} key={user.id}>
          <Contact userData={user} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
