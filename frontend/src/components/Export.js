// src/components/Export.js
import React, { useState } from 'react';
import { Button, Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

const Export = ({ data, visibleColumns }) => {
  const [exporting, setExporting] = useState(false);

  const handleExportCSV = () => {
    setExporting(true);
    message.loading('Exporting CSV...', 0);
  };

  const handleExportPDF = () => {
    setExporting(true);
    message.loading('Exporting PDF...', 0);
    const doc = new jsPDF();
    doc.autoTable({
      head: [visibleColumns],
      body: data.map(item => visibleColumns.map(col => item[col])),
    });
    doc.save('table-data.pdf');
    message.success('Export successful!');
    setExporting(false);
  };

  const handleExportXLSX = () => {
    setExporting(true);
    message.loading('Exporting XLSX...', 0);
    const ws = XLSX.utils.json_to_sheet(data, { header: visibleColumns });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'table-data.xlsx');
    message.success('Export successful!');
    setExporting(false);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={handleExportCSV}>
        <CSVLink data={data} filename={"table-data.csv"}>
          Export as CSV
        </CSVLink>
      </Menu.Item>
      <Menu.Item onClick={handleExportPDF}>
        Export as PDF
      </Menu.Item>
      <Menu.Item onClick={handleExportXLSX}>
        Export as XLSX
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button type="primary" style={{ backgroundColor: '#6D31ED', borderColor: '#6D31ED', color: 'white' }}>
        Export As <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Export;
