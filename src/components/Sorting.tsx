import { Chip, Stack } from "@mui/material";
import { useState } from "react";
import { IListItem } from "../interfaces";

type Props = {
  data: IListItem[];
  setData: (data: IListItem[]) => void;
};

export const Sorting = ({ data, setData }: Props) => {
  const [sorting, setSorting] = useState<string>("");

  const sortById = () => {
    const newList = [...data];
    newList.sort((a, b) => (a.id > b.id ? -1 : 1));
    setData(newList);
  };

  const sortByCompleted = () => {
    const newList = [...data];
    //newList.sort((a, b) => b.completed - a.completed);
    setData(newList);
  };

  return (
    <div>
      <Stack direction="row" spacing={1}>
        <Chip label="ID" variant="outlined" onClick={sortById} />
        <Chip label="completed" variant="outlined" onClick={sortByCompleted} />
      </Stack>
    </div>
  );
};
