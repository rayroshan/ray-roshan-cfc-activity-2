import React, { useState, useEffect } from "react";
import { getApiData } from "./api/Api";
import Item from "./components/Item/Item";
import Layout from "./components/Layout/Layout";
import Tag from "./components/Tag/Tag";
import "./styles/global.scss";

const App = () => {
  const tags = ["ALL", "CPS", "FOOD", "HEALTH", "VEHICLE"];
  const [selected, setSelected] = useState("ALL");
  const [items, setItems] = useState();

  useEffect(() => {
    getData();
  }, []);
  
  // API call to open weather map
  const getData = async (currentCity) => {
    try {
      setItems(await getApiData());
    } catch (err) {}
  };

  const renderItems = () => {
    if (items)
      return items[selected]?.map((item) => (
        <Item
          key={item?.recallId}
          title={item?.title}
          date_published={item?.date_published}
          recallId={item?.recallId}
        />
      ));
  };

  return (
    <Layout>
      <Tag
        tags={tags}
        selected={selected}
        setSelected={(tag) => setSelected(tag)}
      />
      {renderItems()}
    </Layout>
  );
};

export default App;
