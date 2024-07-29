import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import Handsontable from 'handsontable';
import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.full.css';
import './WeeklyReport.css';

const WeeklyReport = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/calc.xlsm');
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const headers = jsonData[0];
        const rows = jsonData.slice(1);

        setColumns(headers.map(header => ({ data: header, title: header })));
        setData(rows);
      } catch (error) {
        console.error('Error fetching the Excel file:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="weekly-report">
      <h2>Еженедельный отчет</h2>
      <HotTable
        data={data}
        colHeaders={columns.map(col => col.title)}
        rowHeaders={true}
        licenseKey="non-commercial-and-evaluation"
        width="100%"
        height="600px"
        stretchH="all"
      />
    </div>
  );
};

export default WeeklyReport;
