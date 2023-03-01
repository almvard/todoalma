import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { IListItem } from "../interface/interfaces";

type Props = {
  data: IListItem[];
  setData: (data: IListItem[]) => void;
};

export const List = ({ data, setData }: Props) => {
  const handleClick = (index: number) => {
    console.log(index);
    const newList = [...data];
    newList[index].completed = !newList[index].completed;
    setData(newList);
  };

  return (
    <div>
      <FormGroup>
        {data.map((item: IListItem, index: number) => (
          <FormControlLabel
            key={item.id}
            control={<Checkbox checked={item.completed} />}
            label={item.title}
            onChange={() => handleClick(index)}
          />
        ))}
      </FormGroup>
    </div>
  );
};
