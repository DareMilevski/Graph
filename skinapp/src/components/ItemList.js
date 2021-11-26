import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { AllCategory } from "../query/query";

const ItemList = ({ setData, defaultItems }) => {
  const [active, setActive] = useState(0);
  const [originalData, setOriginalData] = useState();
  const { data: all } = useQuery(AllCategory);

  useEffect(() => {
    if (defaultItems) {
      setOriginalData([
        {
          active: true,
          categories: all && all.data_categories,
          icon: "Spa",
          id: 0,
          name: "All",
        },
        ...defaultItems,
        {
          active: false,
          categories: defaultItems,
          icon: "Facial",
          id: defaultItems.length + 1,
          name: "Vouchers",
        },
      ]);
    }
  }, [defaultItems]);

  const handleOnClick = (categories, index, name) => {
    if (name === "All") {
      setData(all.data_categories);
      setActive(index);
    } else {
      setData(categories);
      setActive(index);
    }
  };

  return (
    <div className="item-list">
      {originalData &&
        originalData.map((el, index) => (
          <div
            key={index}
            onClick={() => handleOnClick(el.categories, index, el.name)}
            className={active === index ? "active" : "inner"}
          >
            <div>
              <img
                alt={el.icon}
                src={require(`../assets/${el.icon}.svg`).default}
              />
            </div>
            <p>{el.name}</p>
          </div>
        ))}
    </div>
  );
};

export default ItemList;
