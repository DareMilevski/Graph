import { useState, useEffect } from "react";

const ItemList = ({ setData, defaultItems }) => {
  const [active, setActive] = useState(0);
  const [originalData, setOriginalData] = useState();

  useEffect(() => {
    if (defaultItems) {
      setOriginalData([
        {
          active: true,
          categories: defaultItems,
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

  const handleOnClick = (category, index) => {
    console.log(category);
    setData(category);
    setActive(index);
  };

  return (
    <div className="item-list">
      {originalData &&
        originalData.map((el, index) => (
          <div
            key={index}
            onClick={() => handleOnClick(el.categories, index)}
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
