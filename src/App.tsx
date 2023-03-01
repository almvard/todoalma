import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { IListItem } from "./interface/interfaces";

function App() {
  const [data, setData] = useState<IListItem[]>([]);
  const [exception, setException] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData))
      .catch((err) => {
        setException(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p></p>
        {data.length > 0 && <List data={data} setData={setData} />}
      </header>
    </div>
  );
}

export default App;
