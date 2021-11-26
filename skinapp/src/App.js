import "./App.css";
import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { AllData, Category, subCategory } from "./query/query";
import "antd/dist/antd.css";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import SelectList from "./components/SelectList";
import ShowDetailsList from "./components/ShowDetailsList";
import ModalComp from "./components/ModalComp";

import { Layout } from "antd";

import logo from "./img/icon-pabau-blue.png";

const { Footer } = Layout;

const App = () => {
  const { data } = useQuery(AllData);
  const { category } = useQuery(Category);
  const { subcategory } = useQuery(subCategory);

  const [originalData, setOriginalData] = useState();

  useEffect(() => {
    data && setOriginalData(data.data_master_categories);
  }, [data]);

  const [dataArr, setData] = useState(category);
  const [items, setItems] = useState(subcategory);


  return (
    <div className="App">
      <Navbar />
      <ModalComp originalData={originalData} subcategory={subcategory} />
      <ItemList setData={setData} defaultItems={originalData} setAllData={setOriginalData} />
      <div className="main">
        <SelectList data={dataArr} setItems={setItems} />
        <ShowDetailsList items={items} setItems={setItems} />
      </div>
      <Layout>
        <Footer>
          Powered by:{" "}
          <a href="https://www.pabau.com/">
            <img src={logo} alt="img" /> Pabau
          </a>
        </Footer>
      </Layout>
    </div>
  );
};

export default App;

// const getSubCategories = (categories) => {
//   let out = [];
//   if (categories) {
//     for (let i = 0; i < categories.length; i++) {
//       out = [...out, ...categories[i].sub_categories];
//     }
//   } else {
//     out = originalData && originalData[0].categories[0].sub_categories;
//   }
//   return out;
// };

// console.log(getSubCategories());

// const getAllCategories = () => {
//   let out = [];
//   if (!data) {
//     return out;
//   }
//   for (let i = 0; i < originalData && originalData.length; i++) {
//     for (let j = 0; j < originalData && originalData.categories.length; j++) {
//       out = [
//         ...out,
//         ...(data && data.originalData[i].categories[j].data_sub_categories),
//       ];
//     }
//   }
//   return out;
// };

// const getAllMainCategories = () => {
//   let out = [];
//   if (!data) {
//     return out;
//   }
//   for (let i = 0; i < originalData && originalData.length; i++) {
//     out = [...out, ...(originalData && originalData[i].categories)];
//   }
//   return out;
// };
