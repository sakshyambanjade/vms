import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Export from './components/Export';
import Table from './components/Table';

const data = [
  {
    key: '1',
    id: '123445567',
    name: 'John Brown',
    location: 'New York',
    rating: 4,
    status: 'Available',
  },
  // Add more venue data here
];

const columns = ['id', 'name', 'location', 'rating', 'status'];

function App() {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (filters) => {
    const filtered = data.filter(item => {
      return (!filters.name || item.name.includes(filters.name)) &&
             (!filters.location || item.location.includes(filters.location));
    });
    setFilteredData(filtered);
  };

  return (
    <>
      <div className='Navbar'><Navbar /></div>
      <div className='Filter'>
        <Filter onFilter={handleFilter} />
        <Export data={filteredData} visibleColumns={columns} />
      </div>
      <div className='Table'><Table filteredData={filteredData} /></div>
    </>
  );
}

export default App;
