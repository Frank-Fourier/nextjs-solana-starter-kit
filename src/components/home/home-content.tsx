// HomeContent.js
import React from "react";
import { ItemList } from "@components/home/item-list";

// Define your items here
const items = [
  {
    imageUrl: '/million.png', // Replace with your actual image URL
    name: 'Item Four',
    id: 4,
  },
  {
    imageUrl: '/dronk.JPG',
    name: 'Item Two',
    id: 2,
  },
  {
    imageUrl: '/dronkV.jpg', // Replace with your actual image URL
    name: 'Item Three',
    id: 3,
  },
];

export function HomeContent() {
  return (
    <div className="grid grid-cols-1">
      <h1 className="text-4xl font-bold mt-8 text-center">Community Meme Art Gallery</h1>
      <div>
        <ItemList items={items} />
      </div>
    </div>
  );
}
