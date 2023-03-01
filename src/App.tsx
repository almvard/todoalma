import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { IListItem } from "./interface/interfaces";
import Pagination from "@mui/material/Pagination";

function App() {
  const [data, setData] = useState<IListItem[]>([]);
  const [exception, setException] = useState();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData))
      .catch((err) => {
        setException(err);
      });
  }, []);

  useEffect(() => {
    setPages(Math.ceil(data.length / 10));
  }, [data]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const calcStartIndex = (): number => {
    return (page - 1) * 10;
  };
  const calcStopIndex = (): number => {
    return calcStartIndex() + 10;
  };

  return (
    <div className="App-header">
      <p>Min fina lista</p>
      <Pagination count={pages} page={page} onChange={handleChange} />
      {data.length > 0 && (
        <List
          data={data}
          setData={setData}
          startIndex={calcStartIndex()}
          stopIndex={calcStopIndex()}
        />
      )}
    </div>
  );
}

export default App;
