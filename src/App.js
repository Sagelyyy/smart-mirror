import './css/App.css';
import './css/weather-icons.css'
import Date from './components/Date';
import Time from './components/Time'
import Carousel from './components/Carousel';
import Weather from './components/Weather';
import Affirmation from './components/Affirmations';

function App() {
  return (
    <div className="App">
      <section className='header'>
        <Weather />
        <Time />
      </section>
      <section className="date--count">
        <Date />
      </section>
      <section className="carousel">
        <Carousel />
      </section>
      <section className="affirmation">
      <Affirmation />
      </section>
    </div>
  );
}

export default App;
