import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { IListItem } from "./interfaces";
import Pagination from "@mui/material/Pagination";
import { Sorting } from "./components/Sorting";

function App() {
  const [data, setData] = useState<IListItem[]>([]);
  const [exception, setException] = useState();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos`
        );
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          throw new Error("Nånting gick fel");
        }
      } catch (e: any) {
        setException(e);
      }
    }
    getData();
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

  //<Sorting data={data} setData={setData} />

  return (
    <div className="App-header">
      {exception ? (
        <>exception lol</>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
