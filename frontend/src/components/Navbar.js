import React from 'react';
import { Layout, theme } from 'antd';
import { UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const { Header } = Layout;

const App = () => {
  theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <div
          className="logo"
          style={{
            color: '#6D31ED',
            flex: 1,
            fontWeight: 'bold',
            fontSize: '24px',
          }}
        >
          VMS
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <QuestionCircleOutlined style={{ fontSize: '20px', color: '#6D31ED', marginRight: '20px' }} />
          <UserOutlined style={{ fontSize: '20px', color: '#6D31ED' }} />
        </div>
      </Header>
    </Layout>
  );
};

export default App;
