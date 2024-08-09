import React from 'react';
import { Column } from '@ant-design/charts';
import { BsArrowDownRight } from "react-icons/bs";
import { Table } from 'antd';

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];

const dataSource = Array.from({
  length: 46,
}).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  product: 32,
  status: `London, Park Lane no. ${i}`,
}));

const Dashboard = () => {
  const data = [
    { date: 'Jan', value: 900, type: '超過六個字的範例' },
    { date: 'Feb', value: 800, type: '超過六個字的範例' },
    { date: 'Mar', value: 1400, type: '超過六個字的範例' },
    { date: 'Apr', value: 900, type: '超過六個字的範例' },
    { date: 'May', value: 1600, type: '超過六個字的範例' },
    { date: 'Jun', value: 300, type: '超過六個字的範例' },
    { date: 'Jul', value: 100, type: '超過六個字的範例' },
    { date: 'Aug', value: 1900, type: '超過六個字的範例' },
    { date: 'Sep', value: 600, type: '超過六個字的範例' },
    { date: 'Oct', value: 1600, type: '超過六個字的範例' },
    { date: 'Nov', value: 1600, type: '超過六個字的範例' },
    { date: 'Dec', value: 1600, type: '超過六個字的範例' },
  ];

  const config = {
    data: data,
    isStack: true,
    autoFit: true,
    appendPadding: [17, 0, 0, 0],
    xField: 'date',
    yField: 'value',
    color: ({ type }) => {
      return "#ffd333";
    },
    
    seriesField: 'type',
    meta: {
      value: { alias: 'Income' },
      date: { alias: 'Month' },
    },
    legend: {
      position: 'right-top',
      offsetY: 17,
      itemName: {
        formatter: (text) => {
          const oldLabel = text;
          const labelLength = oldLabel.length;
          let newLabel = '';
          if (labelLength > 6) {
            const firstStr = oldLabel.substr(0, 6);
            const lastStr = oldLabel.substr(6);
            newLabel = `${firstStr}\n${lastStr}`;
          } else {
            newLabel = oldLabel;
          }
          return newLabel;
        },
      },
    },
    xAxis: {
      title: {
        text: 'Month',
        position: 'end',
        offset: 0,
        spacing: 8,
        style: {
          fontSize: 11,
          fontWeight: 900,
          textAlign: 'start',
        },
      },
      line: {
        style: {
          stroke: 'black',
        },
      },
      tickLine: {
        style: {
          stroke: 'black',
        },
      },
      label: {
        style: {
          fill: 'black',
        },
      },
    },
    yAxis: {
      line: {
        style: {
          lineWidth: 2,
        },
      },
      label: {
        style: {
          fill: 'black',
        },
        offset: 15,
        formatter: (text) => {
          const label = (text / 1000).toFixed(2);
          return label;
        },
      },
    },
    tooltip: {
      showTitle: false,
      formatter: (datum) => {
        return {
          name: `${datum.type}`,
          value: `${datum.value.toLocaleString()}元`,
        };
      },
    },
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  return (
    <div>
      <h3 className='mb-4 title'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div>
            <p className='desc'>Total</p>
            <h4 className='mb-0 sub-title'>$1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'>
              <BsArrowDownRight />32%
            </h6>
            <p className='mb-0 desc'>Compared to April 2024</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div>
            <p className='desc'>Total</p>
            <h4 className='mb-0 sub-title'>$1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'>
              <BsArrowDownRight />32%
            </h6>
            <p className='mb-0 desc'>Compared to April 2024</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div>
            <p className='desc'>Total</p>
            <h4 className='mb-0 sub-title'>$1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'>
              <BsArrowDownRight />32%
            </h6>
            <p className='mb-0 desc'>Compared to April 2024</p>
          </div>
        </div>
      </div>
      <div className='mt-4'> 
        <h3 className='mb-5 title'>Income Statistics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-5 title'>Recent Orders</h3>
        <div>
          <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
