import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { IListItem } from "../interfaces";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./List.css";

type Props = {
  data: IListItem[];
  setData: (data: IListItem[]) => void;
  startIndex: number;
  stopIndex: number;
};

export const List = ({ data, setData, startIndex, stopIndex }: Props) => {
  const handleClick = (index: number) => {
    const newList = [...data];
    newList[index].completed = !newList[index].completed;
    setData(newList);
  };

  const handleDelete = (index: number) => {
    const newList = [...data];
    newList.splice(index, 1);
    setData(newList);
  };

  return (
    <div>
      <FormGroup>
        {data.map(
          (item: IListItem, index: number) =>
            index >= startIndex &&
            index < stopIndex && (
              <div className="List">
                <FormControlLabel
                  key={item.id}
                  control={<Checkbox checked={item.completed} />}
                  label={item.title}
                  onChange={() => handleClick(index)}
                />
                <DeleteOutlineIcon
                  className="Trashicon"
                  onClick={() => handleDelete(index)}
                />
              </div>
            )
        )}
      </FormGroup>
    </div>
  );
};
