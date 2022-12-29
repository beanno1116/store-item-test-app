import React, { useState } from 'react';
import HeaderView from './components/HeaderView/HeaderView';
import SelectView from './components/SelectView/SelectView';
import TableView from './components/TableView/TableView';

import { storeData } from '../TestData/storeData';
import { items } from '../TestData/itemData';

import styles from './mainView.module.css';

const MainView = (props) => {
  const [heading, setHeading] = useState('Select store');
  const [filteredData, setFilteredData] = useState([]);

  const handleSelectChangeEvent = (e) => {
    debugger;
    console.log(e);
    console.log('Select onChange event fired');
    let selectedIndex = e.target.selectedIndex;
    if (selectedIndex > 0) {
      let store = storeData[selectedIndex - 1];
      setHeading(store.name);
      let tmpItems = items;
      let itemData = items.filter((item) => item.storeID === store.id);
      if (itemData.length > 0) {
        setFilteredData(itemData);
        return;
      }
    }
    setFilteredData([]);
    setHeading('Select store');
  };

  return (
    <div className={styles.main_view}>
      <HeaderView heading={heading} />
      <SelectView
        options={storeData}
        onChange={(e) => handleSelectChangeEvent(e)}
      />
      <TableView data={filteredData} />
    </div>
  );
};

export default MainView;
