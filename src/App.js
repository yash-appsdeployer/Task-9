import { useState } from 'react';
import './App.css';
import ButtonData from './Components/ButtonData';
import TableData from './Components/TableData';

const Data = [{
  name: "Yash Kamdi",
  mail: "yash123@gamil.com"
},
{
  name: "Yash Singh",
  mail: "singh123@gamil.com"
},
{
  name: "Yash Sharma",
  mail: "sharma123@gamil.com"
}
]

function App() {
  const [data, setData] = useState(Data);
  return (
    <div>
      <ButtonData data={data} setData={setData} />
      <TableData data={data} />
    </div>
  );
}

export default App;
