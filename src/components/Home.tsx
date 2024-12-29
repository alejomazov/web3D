// src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';  // Importa el componente ProductCard

// Productos de ejemplo

const productos = [
  { id: 1, nombre: 'Reloj de Peso', precio: '$199.99', imagen: '/images/product1.jpg' },
  { id: 2, nombre: 'Banca de Pesas', precio: '$249.99', imagen: '/images/product2.jpg' },
  { id: 3, nombre: 'Pesas Ajustables', precio: '$179.99', imagen: '/images/product3.jpg' },
  { id: 4, nombre: 'Silla de Entrenamiento', precio: '$229.99', imagen: '/models/img/rack.jpg' },
  { id: 5, nombre: 'Silla de Entrenamiento', precio: '$229.99', imagen: '/images/product4.jpg' },
  { id: 6, nombre: 'Silla de Entrenamiento', precio: '$229.99', imagen: '/images/product4.jpg' },
  { id: 7, nombre: 'Silla de Entrenamiento', precio: '$229.99', imagen: '/images/product4.jpg' },
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <header style={headerStyle}>
        <div style={navbarStyle}>
          <a href="/" style={logoStyle}>Fitness</a>
          <nav>
            <ul style={navListStyle}>
              <li><Link to="/" style={navItemStyle}>Home</Link></li>
              <li><Link to="/shop" style={navItemStyle}>Shop</Link></li>
              
              <li><Link to="/contact" style={navItemStyle}>Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div style={heroSectionStyle}>
          <h1>Best Selling Fitness Equipment</h1>
          <p>Find the perfect equipment for your home gym.</p>
          <Link to="/shop" style={btnShopNowStyle}>Shop Now</Link>
        </div>
      </header>

      {/* Best Sellers Section */}
      <main style={{ padding: '40px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Our Best Sellers</h2>
        <div style={productGridStyle}>
          {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>&copy; 2024 Fitness | All Rights Reserved</p>
      </footer>
    </div>

    
  );
};



// Estilos inline para mejorar la claridad
const headerStyle = {
  backgroundColor: '#111',
  color: '#fff',
  padding: '20px 0',
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 20px',
};

const logoStyle = {
  fontSize: '2rem',
  color: '#fff',
  textDecoration: 'none',
};

const navListStyle = {
  display: 'flex',
  gap: '20px',
};

const navItemStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1rem',
};


const heroSectionStyle = {
  textAlign: 'center',
  backgroundImage: 'url("/models/img/fondo.jpg!w700wp")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 20px',
};

const btnShopNowStyle = {
  display: 'inline-block',
  backgroundColor: '#f5a623',
  color: '#fff',
  padding: '15px 30px',
  textDecoration: 'none',
  borderRadius: '5px',
  fontSize: '1.2rem',
};

const productGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '20px',
  marginTop: '30px',
};

const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#111',
  color: '#fff',
  padding: '20px',
};

export default Home;

export { headerStyle, navbarStyle, logoStyle, navListStyle, navItemStyle, heroSectionStyle };  