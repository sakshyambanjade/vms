// src/components/VenueTable.js
import React from 'react';
import { Table, Tag } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const columns = [
  {
    title: 'Venue Id',
    dataIndex: 'id',
    render: text => <span>{text}</span>,
  },
  {
    title: 'Venue Name',
    dataIndex: 'name',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    render: text => <span>{text}</span>,
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    render: rating => (
      <span>
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </span>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: text => (
      <Tag color={text === 'Available' ? 'green' : 'red'}>
        {text}
      </Tag>
    ),
  },
];

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

const VenueTable = ({ filteredData }) => (
  <Table
    columns={columns}
    dataSource={filteredData || data}
    rowKey="key"
    pagination={false} // Disable pagination
  />
);

export default VenueTable;
