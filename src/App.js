import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardsGroup2 from './CardsGroup2/CardsGroup2';

function App() {
  return (
    <div className="App">
      <h1>Using react bootstrap</h1>
      <Button variant='danger'>My button</Button>
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardsGroup2></CardsGroup2>
    </div>
  );
}

export default App;
