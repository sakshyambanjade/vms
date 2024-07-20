import React, { useState } from 'react';
import { Button, Modal, Input, Form, Row, Col, Select } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

const Filter = ({ data, onFilter }) => {
  const [visible, setVisible] = useState(false);
  const [noDataVisible, setNoDataVisible] = useState(false); 
  const [form] = Form.useForm();

  const handleApply = () => {
    if (!data || data.length === 0) {
      console.error("No data available for filtering");
      setNoDataVisible(true);
      return;
    }

    const filters = form.getFieldsValue();
    onFilter(filters);
    setVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        icon={<FilterOutlined />}
        style={{
          backgroundColor: '#6D31ED',
          borderColor: '#6D31ED',
          color: 'white',
          borderRadius: '4px',
          fontSize: '12px',
          padding: '4px 8px',
          marginRight: '10px'
        }}
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
          <Button
            key="cancel"
            onClick={() => setVisible(false)}
            style={{
              borderColor: '#6D31ED',
              fontSize: '12px',
              padding: '4px 8px'
            }}
          >
            Cancel
          </Button>,
          <Button
            key="apply"
            type="primary"
            onClick={handleApply}
            style={{
              backgroundColor: '#6D31ED',
              borderColor: '#6D31ED',
              fontSize: '12px',
              padding: '4px 8px'
            }}
          >
            Apply
          </Button>
        ]}
        centered
        width={500}
      >
        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Filter by Venue ID" name="venueId">
                <Input placeholder="Enter venue ID" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Filter by Availability" name="availability">
                <Select placeholder="Select availability">
                  <Select.Option value="Available">Available</Select.Option>
                  <Select.Option value="Unavailable">Unavailable</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
      <Modal
        title="No Data"
        visible={noDataVisible}
        onOk={() => setNoDataVisible(false)}
        onCancel={() => setNoDataVisible(false)}
        centered
        footer={[
          <Button
            key="ok"
            type="primary"
            onClick={() => setNoDataVisible(false)}
            style={{
              backgroundColor: '#6D31ED',
              borderColor: '#6D31ED',
              fontSize: '12px',
              padding: '4px 8px'
            }}
          >
            OK
          </Button>
        ]}
      >
        No data available for filtering
      </Modal>
    </>
  );
};

export default Filter;
