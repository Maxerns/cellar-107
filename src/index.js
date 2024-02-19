import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root')); // Use createRoot
root.render(<App />);
