import React from 'react';

const FilterableList = ({ items, filterCategory }) => {
  // Filter logic: show all items if no category is specified
  const filteredItems = filterCategory
    ? items.filter(item => item.category === filterCategory)
    : items;

  return (
    <div>
      <h3>{filterCategory ? `Category: ${filterCategory}` : 'All Items'}</h3>
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <li key={item.id}>
              {item.name} — <em>{item.category}</em>
            </li>
          ))
        ) : (
          <li>No items found.</li>
        )}
      </ul>
    </div>
  );
};

export default FilterableList;
