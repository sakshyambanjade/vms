import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Export from './components/Export';
import Table from './components/Table';
import { columns, data } from './components/Table';
import '../src/Style/style.css'; 

function App() {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (filters) => {
    const filtered = data.filter(item => {
      return (!filters.venueId || item.venueId.includes(filters.venueId)) &&
             (!filters.availability || item.availability === filters.availability);
    });
    setFilteredData(filtered);
  };

  return (
    <>
      <div className='Navbar'><Navbar /></div>
      <div className='Filter'>
        <Filter data={data} onFilter={handleFilter} />
        <Export data={filteredData} visibleColumns={columns} />
      </div>
      <div className='Table'><Table filteredData={filteredData || []} /></div>
    </>
  );
}

export default App;
