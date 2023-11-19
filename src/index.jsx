import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';
import './styles/style.css';

const element = <ContactApp />;

const root = createRoot(document.getElementById('root'));
root.render(element);