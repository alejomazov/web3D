// src/components/ProductCard.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  nombre: string;
  precio: string;
  imagen: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, nombre, precio, imagen }) => {
  const [isHovered, setIsHovered] = useState(false);  // Estado para el hover

  // Estilos normales y de hover
  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
   
    
    
    
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',  // Cambio de escala con el hover
    
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}  // Cuando el mouse entra en la tarjeta
      onMouseLeave={() => setIsHovered(false)}  // Cuando el mouse sale de la tarjeta
    >
      <img src={imagen} alt={nombre} style={{ width: '100%', borderRadius: '8px', marginBottom: '15px' }} />
      <h3>{nombre}</h3>
      <p>{precio}</p>
      <Link to={`/design/${id}`} style={btnStyle}>View Product</Link>
    </div>
  );
};

const btnStyle = {
  display: 'inline-block',
  backgroundColor: '#f5a623',
  color: '#fff',
  padding: '10px 20px',
  textDecoration: 'none',
  borderRadius: '5px',
  fontSize: '1rem',
};

export default ProductCard;
