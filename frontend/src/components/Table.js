import React from 'react';
import { Table, Tag } from 'antd';
import '../Style/style.css'; 

export const columns = [
  {
    title: 'Venue Id',
    dataIndex: 'venueId',
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
    title: 'Capacity',
    dataIndex: 'capacity',
  },
  {
    title: 'Availability',
    dataIndex: 'availability',
    render: availability => (
      <Tag color={availability === 'Available' ? 'green' : 'red'}>
        {availability.toUpperCase()}
      </Tag>
    ),
  },
];

export const data = [
  {
    key: '1',
    venueId: 'A123',
    name: 'Grand Hall',
    location: 'Downtown',
    capacity: 500,
    availability: 'Available',
  },
  {
    key: '2',
    venueId: 'B456',
    name: 'Conference Room',
    location: 'Midtown',
    capacity: 100,
    availability: 'Unavailable',
  },
  // Add more data as needed
];

const VenueTable = ({ filteredData = [] }) => {
  return <Table columns={columns} dataSource={filteredData} />;
};

export default VenueTable;
