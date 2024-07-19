import React from 'react';
import { Table, Button, Select, Tag } from 'antd';
import { v4 as uuidv4 } from 'uuid'; 



const getRandomFormat = () => ['PDF', 'Excel', 'CSV'][Math.floor(Math.random() * 3)];
const getRandomStatus = () => ['Available', 'Booked'][Math.floor(Math.random() * 2)];


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
    title: 'Export Format',
    dataIndex: 'format',
    render: (text, record) => (
      <Select
        defaultValue={text}
        style={{ width: 120 }}
        onChange={(value) => console.log(`Changed format for ${record.name} to ${value}`)}
      >
        <Select.Option value="PDF">PDF</Select.Option>
        <Select.Option value="Excel">Excel</Select.Option>
        <Select.Option value="CSV">CSV</Select.Option>
      </Select>
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
  {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <Button
        style={{ backgroundColor: '#6D31ED', borderColor: '#6D31ED', color: 'white' }}
        onClick={() => console.log(`Action button clicked for ${record.name}`)}
      >
        Action
      </Button>
    ),
  },
];


const data = [
  {
    key: '1',
    id: uuidv4(), 
    name: 'John Brown',
    location: 'New York',
    format: getRandomFormat(),
    status: getRandomStatus(),
  },
  {
    key: '2',
    id: uuidv4(),
    name: 'Jim Green',
    location: 'London',
    format: getRandomFormat(),
    status: getRandomStatus(),
  },
  {
    key: '3',
    id: uuidv4(),
    name: 'Joe Black',
    location: 'Sydney',
    format: getRandomFormat(),
    status: getRandomStatus(),
  },
  {
    key: '4',
    id: uuidv4(),
    name: 'Jim Red',
    location: 'Toronto',
    format: getRandomFormat(),
    status: getRandomStatus(),
  },
];

const onChange = (filters, sorter, extra) => {
  console.log('params', filters, sorter, extra);
};

const App = () => <Table columns={columns} dataSource={data} onChange={onChange} />;

export default App;
