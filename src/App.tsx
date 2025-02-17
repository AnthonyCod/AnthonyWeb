import { useEffect } from 'react';
import Header from './Components/Header';
import Section from './Components/Section';
import CardGrid from './Components/CardGrid';
import TwoColumnLayout from './Components/TwoColumnLayout';
import Footer from './Components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    document.body.style.zoom = '90%';
  }, []);

  return (
    <div>
      <Header />
      <Section />
      <CardGrid />
      <TwoColumnLayout/>
      <Footer/>
    </div>
  );
}

export default App;
