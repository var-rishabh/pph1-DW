import React from 'react';
import { products } from '../../SampleData/products';
import { Table } from 'antd';
import ProductItem from '../ProductItem/ProductItem';
const Products = () => {
  const generateKey = (pre) => {
    return `${pre}_${Math.random()}`;
  }
  const dataWithKey = products.map((product) => ({ ...product, key: generateKey(product.title) }));
  const [tableData, setTableData] = React.useState(dataWithKey);
  const columns = [
    {
      title: 'Name',
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
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      sorter: (a, b) => a.category > b.category,
    },
    {
      title: 'Brand',
      dataIndex: 'brand_name',
      key: 'brand_name',
      sorter: (a, b) => a.brand_name > b.brand_name,
    },
    {
      title: 'In Stock',
      dataIndex: 'in_stock',
      key: 'in_stock',
      sorter: (a, b) => a.in_stock > b.in_stock,
      render: (text, record) => (
        <div className="in_stock">
          {record.in_stock ? 'Yes' : 'No'}
        </div>
      ),
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
          Products List
        </div>
        <div className="header__button">
          <button onClick={() => window.location.href = '/products/add'}>
            Add Product<span>+</span>
          </button>
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

export default Products
