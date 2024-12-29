import React from 'react';



const Sidebar: React.FC = () => {
  
  return (
    <div>
      <h2>Opciones</h2>
      <div>
      
        <label>Dimensiones: </label>
        <button>Aumentar</button>
        <button>Disminuir</button>
      </div>
      <div>
        <label>Accesorios:</label>
        <button>Agregar</button>
        <button>Quitar</button>
      </div>
    </div>
  );
};

export default Sidebar;
