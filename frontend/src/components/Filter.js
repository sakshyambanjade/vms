// src/components/Filter.js
import React, { useState } from 'react';
import { Button, Modal, Input, Form, Row, Col } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

const Filter = ({ onFilter }) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const handleApply = () => {
    const filters = form.getFieldsValue();
    onFilter(filters);
    setVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        icon={<FilterOutlined />}
        style={{ backgroundColor: '#6D31ED', borderColor: '#6D31ED', color: 'white', borderRadius: '4px' }}
        onClick={() => setVisible(true)}
      >
        Add Filter
      </Button>
      <Modal
        title="Filter Options"
        visible={visible}
        onOk={handleApply}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setVisible(false)} style={{ borderColor: '#6D31ED' }}>Cancel</Button>,
          <Button key="apply" type="primary" onClick={handleApply} style={{ backgroundColor: '#6D31ED', borderColor: '#6D31ED' }}>Apply</Button>
        ]}
        centered
        width={500}
      >
        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Filter by Name" name="name">
                <Input placeholder="Enter name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Filter by Location" name="location">
                <Input placeholder="Enter location" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default Filter;
