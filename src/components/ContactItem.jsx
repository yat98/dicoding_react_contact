/* eslint-disable react/prop-types */
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteContact from './DeleteContact';

function ContactItem({ imageUrl, name, tag, id, onDelete }) {
  return (<div className="contact-item">
    <ContactItemImage imageUrl={imageUrl}/>
    <ContactItemBody name={name} tag={tag}/>
    <DeleteContact id={id} onDelete={onDelete} />
  </div>);
}

export default ContactItem;