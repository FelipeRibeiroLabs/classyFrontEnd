import './Styles/App.css';
import Crew from './components/model/Crew';
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Crew />
      <Footer />
    </div>
  );
}

export default App;
