import React from 'react';
import { FilterOutlined, CloseOutlined, ClearOutlined, TagsOutlined} from '@ant-design/icons';
import { Input, Button, Space } from 'antd';

const App = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 20px',
    backgroundColor: 'white',
  }}>
    
    <Space size="small" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
      <Button type="primary" icon={<FilterOutlined />} style={{ backgroundColor: '#6D31ED', borderColor: '#6D31ED' }}>
        Filter
      </Button>
      <Input 
        placeholder="Filter by Tag" 
        prefix={<TagsOutlined/>} 
        style={{ width: 200, color: 'white', backgroundColor: '#6D31ED', borderColor: '#6D31ED' }}
      />
      <Button type="primary" style={{ backgroundColor: '#6D31ED', borderColor: '#6D31ED' }}>
        Apply
      </Button>
      <Button type="primary" icon={<CloseOutlined />} style={{ backgroundColor: '#6D31ED', borderColor: '#6D31ED' }}>
        Cancel
      </Button>
      <Button type="primary" icon={<ClearOutlined />} style={{ backgroundColor: '#6D31ED', borderColor: '#6D31ED' }}>
        Clear All
      </Button>
     
    </Space>
  </div>
);

export default App;
