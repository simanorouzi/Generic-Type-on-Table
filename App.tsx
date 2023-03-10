import * as React from 'react';
import './style.css';
import ListView from './listView';

export default function App() {
  const foods = [
    { title: 'food1', price: 23, id: 'm1' },
    { title: 'food2', price: 23, id: 'm2' },
    { title: 'food3', price: 24, id: 'm3' },
    { title: 'food4', price: 25, id: 'm4' },
    { title: 'food5', price: 26, id: 'm5' },
  ];

  const users = [
    { name: 'name1', userid: 'un1', id: 'i1' },
    { name: 'name2', userid: 'un2', id: 'i2' },
    { name: 'name3', userid: 'un3', id: 'i3' },
    { name: 'name4', userid: 'un4', id: 'i4' },
    { name: 'name5', userid: 'un5', id: 'i5' },
    { name: 'name6', userid: 'un6', id: 'i6' },
  ];

  const selectListHandler = (item) => {
    console.log(item);
  };

  return (
    <div>
      <ListView
        rows={foods}
        onSelect={(item) => {
          console.log(item.title);
        }}
      />
      ;
      <ListView
        rows={users}
        onSelect={(item) => {
          console.log(item.name);
        }}
      />
      ;
    </div>
  );
}
