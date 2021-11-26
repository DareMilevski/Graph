import { useEffect, useState } from "react";

const SelectList = ({ data, setItems }) => {
  const [dataNew, setNewData] = useState();

  return (
    <div className="select-menu">
      {data &&
        data.map((el, i) => (
          <div
            className="menu-items"
            key={el.name + el.id + console.log(el.id)}
            onClick={() => {
              setItems(el.sub_categories);
            }}
          >
            {el.name}
            <div>{el.id}</div>
          </div>
        ))}
    </div>
  );
};

export default SelectList;
