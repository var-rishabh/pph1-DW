import React from 'react';
import { products } from '../../SampleData/products';
import { Table } from 'antd';


const Users = () => {
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
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      sorter: (a, b) => a.phone > b.phone,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email > b.email,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address > b.address,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div className="action__button">
          <button>More</button>
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
          Users
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

export default Users;
