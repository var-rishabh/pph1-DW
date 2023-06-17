import React from 'react';
import { products } from '../../SampleData/products';
import { Table } from 'antd';
import ProductItem from '../ProductItem/ProductItem';
const Coupons = () => {
  const generateKey = (pre) => {
    return `${pre}_${Math.random()}`;
  }
  const dataWithKey = products.map((product) => ({ ...product, key: generateKey(product.title) }));
  const [tableData, setTableData] = React.useState(dataWithKey);
  const columns = [
    {
      title: 'Coupon Code',
      dataIndex: 'coupon_code',
      key: 'coupon_code',
      sorter: (a, b) => a.coupon_code > b.coupon_code,
    },
    {
      title: 'Discount Type',
      dataIndex: 'discount_type',
      key: 'discount_type',
      sorter: (a, b) => a.discount_type > b.discount_type,
    },
    {
      title: 'Discount Amount',
      dataIndex: 'discount',
      key: 'discount',
      sorter: (a, b) => a.discount > b.discount,
    },
    {
      title: 'Expiry Date',
      dataIndex: 'expiry',
      key: 'expiry',
      sorter: (a, b) => a.expiry > b.expiry,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div className="action__button">
          <button>Edit</button>
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
          Coupons
        </div>
        <div className="header__button">
          <button>Add Coupon<span>+</span></button>
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

export default Coupons;
