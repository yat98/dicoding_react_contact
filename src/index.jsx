import { createRoot } from 'react-dom/client';
import ContactApp from './ContactApp';

const element = <ContactApp />;

const root = createRoot(document.getElementById('root'));
root.render(element);