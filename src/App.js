import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Card from './components/card';
import './App.css';

function MyApp() {
  return (
    <div>
      <Header />
      <Hero />
      <div className='card-container'>
      <Card
        imgSrc="https://images.unsplash.com/photo-1623216216626-f8bfd191552d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        product="Radio"
        price="9000"
        offer="7094"
      />
      <Card
        imgSrc="https://images.unsplash.com/photo-1523476324532-18841ae4b297?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        product="Cosmic"
        price="6000"
        offer="4999"
      />
      <Card
        imgSrc="https://www.trackandtrail.in/sites/default/files/styles/listing_image/public/unplugged-s_0.png?itok=QyyHERE4"
        product="Btwin"
        price="6500"
        offer="5999"
      />
      </div>
      <Footer />

    </div>
  );
}
export default MyApp;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
