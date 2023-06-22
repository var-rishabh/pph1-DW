import React from 'react';
import { products } from '../../SampleData/products';
import { Table } from 'antd';

const Payments = () => {
  const generateKey = (pre) => {
    return `${pre}_${Math.random()}`;
  }
  const dataWithKey = products.map((product) => ({ ...product, key: generateKey(product.title) }));
  const [tableData, setTableData] = React.useState(dataWithKey);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name > b.name,
    },
    {
      title: 'Order Type',
      dataIndex: 'order_type',
      key: 'order_type',
      sorter: (a, b) => a.order_type > b.order_type,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      sorter: (a, b) => a.amount > b.amount,
    },
    {
      title: 'Payment Status',
      dataIndex: 'payment_response',
      key: 'payment_response',
      sorter: (a, b) => a.payment_response > b.payment_response,
    },
    {
      title: 'Transaction Type',
      dataIndex: 'transaction_type',
      key: 'transaction_type',
      sorter: (a, b) => a.transaction_type > b.transaction_type,
    },
    {
      title: 'Payment Response',
      dataIndex: 'payment_response',
      key: 'payment_response',
      sorter: (a, b) => a.payment_response > b.payment_response,
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      name: record.title,
    }),
  };
  return (
    <div className="products">
      <div className="header">
        <div className="heading">
          Payments
        </div>
      </div>
      <div className="table">
        <Table
          dataSource={tableData}
          columns={columns}
          loading={false}
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          pagination={{
            position: ['bottomRight'],
          }}
          sticky={true}
          sortDirections={['descend', 'ascend']}
          scroll={{ x: 1250, y: 450 }}
        />
      </div>
    </div>
  )
}

export default Payments;
