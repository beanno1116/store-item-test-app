import React from 'react';

import styles from './tableView.module.css';

const TableView = ({ data }) => {
  return (
    <div className={styles.table_view}>
      <table>
        <thead>
          <tr>
            <th>UPC</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.upc}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
          {data.length === 0 && (
            <tr>
              <td colSpan={3}>{'NO ITEMS FOUND'}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
