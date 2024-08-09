import React from 'react';
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

const dataSource = Array.from({ length: 46 }).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  product: `Product ${i}`,
  status: `Status ${i}`,
}));

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

const Brandlist = () => {
  return (
    <div>
      <h3 className='mb-4 title'>Brands</h3>
      <div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}

export default Brandlist;
