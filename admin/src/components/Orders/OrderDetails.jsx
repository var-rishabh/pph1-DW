import { Badge, Descriptions, Modal } from 'antd';
import { products } from '../../SampleData/products';
import ProductItem from '../ProductItem/ProductItem';
import { useState } from 'react';
const currentOrder = products[0];
const OrderDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCancel = () => {
        isModalOpen(false);
    }
    const handleOk = () => {
        isModalOpen(false);
    }
    return (
        <>
            <div className="header">
                <div className="heading">
                   Order Details
                </div>
                <div className="header__button">
                    <button onClick={() => window.location.href = '/orders'}>
                        Back
                    </button>
                </div>
            </div>
            <Descriptions layout="vertical" bordered>
                <Descriptions.Item label="Product">
                    <ProductItem
                        title={currentOrder.title}
                        image={currentOrder.image}
                        size={currentOrder.size}
                    />
                </Descriptions.Item>
                <Descriptions.Item label="Order Type">Subscribe</Descriptions.Item>
                <Descriptions.Item label="Order Time">2018-04-24 18:00:00</Descriptions.Item>
                <Descriptions.Item label="Delivery Time" span={2}>
                    2019-04-24 18:00:00
                </Descriptions.Item>

                <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                <Descriptions.Item label="Quantity">2</Descriptions.Item>
                <Descriptions.Item label="Category">Dairy</Descriptions.Item>
                <Descriptions.Item label="Status" span={3}>
                    <Badge status="processing" text="Completed" />
                </Descriptions.Item>
                <Descriptions.Item label="User Details">
                    Name: Shubham Aggarwal
                    <br />
                    Email: aggarwalshubham026@gmail.com
                    <br />
                    Phone: 1810000000
                    <br />
                    Address: No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                    <br />
                    City: New Delhi
                    <br />
                    State: Delhi
                    <br />
                </Descriptions.Item>
            </Descriptions>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
};
export default OrderDetails;