import React,{useState} from 'react';
import './App.css';
import Title from './components/title.js';


function App() {

  const [name,setName] = useState("John Doe");
  const [date, setDate] = useState("DOB");

  return (
    <div className="container-fluid">
      <h1 className="text-center">Signature App</h1>
      <Title text={date} />
      <Title text={name}/>
      <p>The sky was a vibrant shade of cerulean, dotted with fluffy cotton candy clouds drifting lazily across the horizon. Birds chirped melodiously, their songs weaving through the gentle rustle of leaves in the breeze. The scent of freshly cut grass lingered in the air, mingling with the fragrance of blooming flowers. A lone figure sat beneath the shade of a towering oak tree, lost in thought as the world moved around them. Time seemed to slow, each moment stretching into eternity as they contemplated the mysteries of existence. In that serene moment, all worries and cares faded into insignificance.</p>
      <div className="d-flex input-boxes">
        <input type="date" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)}/>
      </div>
    </div>
  );
}

export default App;
