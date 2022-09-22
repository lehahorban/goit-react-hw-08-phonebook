import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from './ContactList.module.css';
import { useSelector } from 'react-redux';
import image from './img/pngwing.com (6).png';

function ContactList({ contacts, deleteUser }) {
  const isLoading = useSelector(store => store.contacts.loading);

  return (
    <div>
      <ul className={style.list}>
        <p>Contact</p>
        {isLoading && <p className={style.loading}>Loading...</p>}
        {contacts.map(({ id, name, phone, number }) => (
          <li key={shortid.generate()}>
            {name}:
            {
              <a className={style.telLink} href="tel:">
                <div className={style.imageWrapp}>
                  <img className={style.image} src={image} alt="images" />
                  {number || phone}
                </div>
              </a>
            }
            <button onClick={() => deleteUser(id)}>Delete</button>
          </li>
        ))}
      </ul>
      {contacts.length === 0 && (
        <p className={style.text}>Your phonebook is empty</p>
      )}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default ContactList;
