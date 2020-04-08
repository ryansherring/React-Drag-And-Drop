import React from 'react';
import Board from './Components/Board'
import Card from './Components/Card'
//import './main.css'

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>card 1</p>
          </Card>
        </Board>
        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>card 2</p>
          </Card>
        </Board>
        <Board id="board-3" className="board">

        </Board>
      </main>
    </div>
  );
}

export default App;
