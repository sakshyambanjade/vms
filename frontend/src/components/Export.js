import React, { useState } from 'react';
import { Button, Menu, Dropdown, message, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import '../Style/style.css'; 

const Export = ({ data = [], visibleColumns }) => {
  const [exporting, setExporting] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState(null);

  const handleOk = () => {
    setIsModalVisible(false);
    if (selectedFormat === 'CSV') {
      handleExportCSV();
    } else if (selectedFormat === 'PDF') {
      handleExportPDF();
    } else if (selectedFormat === 'XLSX') {
      handleExportXLSX();
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleExportCSV = () => {
    setExporting(true);
    message.loading('Exporting CSV...', 0);
    setTimeout(() => {
      message.destroy();
      message.success('Export successful!');
      const csvContent = [
        visibleColumns.map(col => col.title).join(','),
        ...data.map(item => visibleColumns.map(col => item[col.dataIndex]).join(','))
      ].join('\n');
      const csvLink = document.createElement('a');
      csvLink.href = URL.createObjectURL(new Blob([csvContent], { type: 'text/csv' }));
      csvLink.download = 'table-data.csv';
      csvLink.click();
      setExporting(false);
    }, 2000);
  };

  const handleExportPDF = () => {
    setExporting(true);
    message.loading('Exporting PDF...', 0);
    const doc = new jsPDF();
    doc.autoTable({
      head: [visibleColumns.map(col => col.title)],
      body: data.map(item => visibleColumns.map(col => item[col.dataIndex])),
    });
    doc.save('table-data.pdf');
    message.destroy();
    message.success('Export successful!');
    setExporting(false);
  };

  const handleExportXLSX = () => {
    setExporting(true);
    message.loading('Exporting XLSX...', 0);
    const ws = XLSX.utils.json_to_sheet(data.map(item => {
      const row = {};
      visibleColumns.forEach(col => {
        row[col.title] = item[col.dataIndex];
      });
      return row;
    }));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'table-data.xlsx');
    message.destroy();
    message.success('Export successful!');
    setExporting(false);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={() => { setSelectedFormat('CSV'); setIsModalVisible(true); }}>
        Export as CSV
      </Menu.Item>
      <Menu.Item onClick={() => { setSelectedFormat('PDF'); setIsModalVisible(true); }}>
        Export as PDF
      </Menu.Item>
      <Menu.Item onClick={() => { setSelectedFormat('XLSX'); setIsModalVisible(true); }}>
        Export as XLSX
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button type="primary" style={{ backgroundColor: '#6D31ED', borderColor: '#6D31ED', color: 'white', fontSize: '12px', padding: '4px 8px' }}>
          Export As <DownOutlined />
        </Button>
      </Dropdown>
      <Modal
        title="Confirm Export"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Ok"
        cancelText="Cancel"
      >
        <p>Are you sure you want to export the data as {selectedFormat}?</p>
      </Modal>
    </>
  );
};

export default Export;
