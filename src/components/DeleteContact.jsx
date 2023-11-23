/* eslint-disable react/prop-types */
function DeleteContact({ id, onDelete }) {
  return <button className="contact-item__delete" onClick={() => onDelete(id)}>X</button>
}

export default DeleteContact;