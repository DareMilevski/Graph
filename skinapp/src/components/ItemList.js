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
          // icon: "/static/media/injection.180f69bf.svg",
          key: 0,
          name: "All",
        },
        ...defaultItems,
        {
          active: false,
          categories: defaultItems,
          // icon: "/static/media/injection.180f69bf.svg",
          key: defaultItems.length + 1,
          name: "Vouchers",
        },
      ]);
    }
  }, [defaultItems]);

  const handleOnClick = (category, index) => {
    setData(category);
    setActive(index);
  };
  console.log(handleOnClick)

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
              <img  alt="image" />
            </div>
            <p>{el.name}</p>
         
          </div>
        ))}
        
    </div>
  );
};

export default ItemList;
