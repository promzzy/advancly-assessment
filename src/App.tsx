import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routers from './routes';

function App() {
  return (
     <div className="app-root-class">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
