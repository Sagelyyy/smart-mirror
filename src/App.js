import './App.css';
import Date from './components/Date';
import Time from './components/Time'
import Carousel from './components/Carousel';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Time />
      <Date />
      <Weather />
      <section className="carousel">
        <Carousel />
      </section>
    </div>
  );
}

export default App;
