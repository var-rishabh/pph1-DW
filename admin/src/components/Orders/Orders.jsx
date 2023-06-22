import React from 'react';
import { products } from '../../SampleData/products';
import { Radio, Table } from 'antd';
import ProductItem from '../ProductItem/ProductItem';
const Orders = () => {
  const generateKey = (pre) => {
    return `${pre}_${Math.random()}`;
  }
  const dataWithKey = products.map((product) => ({ ...product, key: generateKey(product.title) }));
  const [tableData, setTableData] = React.useState(dataWithKey);
  const [selectedOption, setSelectedOption] = React.useState('all');
  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'title',
      key: 'title',
      width: 300,
      sorter: (a, b) => a.title > b.title,
      render: (text, record) => (
        <ProductItem title={record.title} image={record.image} size={record.size} />
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price > b.price,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: (a, b) => a.quantity > b.quantity,
    },
    {
      title: 'Type',
      dataIndex: 'order_type',
      key: 'order_type',
      sorter: (a, b) => a.order_type > b.order_type,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => a.date > b.date,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div className="action__button">
          <button onClick={() => window.location=`/orders/121`}>More</button>
        </div>
      ),
    }
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
          Orders
        </div>
      </div>
      <Radio.Group defaultValue="all" onChange={(e) => setSelectedOption(e.target.value)}>
        <Radio.Button value="all">All</Radio.Button>
        <Radio.Button value="buy">Buy</Radio.Button>
        <Radio.Button value="subscribe">Subscribe</Radio.Button>
        <Radio.Button value="trial">Trial</Radio.Button>
        <Radio.Button value="pending">Pending</Radio.Button>
        <Radio.Button value="approved">Approved</Radio.Button>
        <Radio.Button value="cancelled">Cancelled</Radio.Button>
      </Radio.Group>
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
          scroll={{ x: 1250, y: 420 }}
        />
      </div>
    </div>
  )
}

export default Orders;

