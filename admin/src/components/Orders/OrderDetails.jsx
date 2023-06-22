import { Badge, Descriptions, Modal, Spin } from 'antd';
import ProductItem from '../ProductItem/ProductItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../../Actions/Orders';
const OrderDetails = () => {
    const dispatch = useDispatch();
    const { order, loading } = useSelector((state) => state.orderReducer);
    console.log(order);
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCancel = () => {
        isModalOpen(false);
    }
    const handleOk = () => {
        isModalOpen(false);
    }
    useEffect(() => {
        dispatch(getOrderDetails(id));
    }, [dispatch, id]);
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
            {loading ? <Spin /> :
                <Descriptions layout="vertical" bordered>
                    <Descriptions.Item label="Product">
                        <ProductItem
                            title={order?.product_id?.title}
                            image={order?.product_id?.images[0]}
                            size={order?.product_id?.size}
                        />
                    </Descriptions.Item>
                    <Descriptions.Item label="Order Type">{order?.order_type?.charAt(0)?.toUpperCase() + order?.order_type?.slice(1)}</Descriptions.Item>
                    <Descriptions.Item label="Order Time">{new Date(order.cart && order?.cart[0].createdAt).toLocaleString()}</Descriptions.Item>
                    <Descriptions.Item label="Delivery Time" span={2}>
                        {new Date(order?.delivery_date).toLocaleString()}
                    </Descriptions.Item>

                    <Descriptions.Item label="Amount">₹{order?.final_price}</Descriptions.Item>
                    <Descriptions.Item label="Quantity">{order?.quantity}</Descriptions.Item>
                    <Descriptions.Item label="Category">{order?.product_id?.category}</Descriptions.Item>
                    <Descriptions.Item label="Status" span={3}>
                        {order?.status === 'pending' ?
                            <>
                            <div className="action__button--group">
                                <div className="action__button green">
                                    <button>Approve</button>
                                </div>
                                <div className="action__button red">
                                    <button>Reject</button>
                                </div>
                            </div>
                            </>
                            : (order?.status === 'approved' ) ? 
                            <Badge status="success" text="Approved" />
                            : (order?.status === 'cancelled' ) ?
                            <Badge status="error" text="Cancelled" />
                            : (order?.status === 'completed' ) ?
                            <Badge status="success" text="Completed" />
                            : "Error On Status"
                        }
                    </Descriptions.Item>
                    <Descriptions.Item label="User Details">
                        Name: {order?.user_id?.name}
                        <br />
                        Email: {(order?.user_id?.email) ? order?.user_id?.email : order?.user_id?.emailData}
                        <br />
                        Phone: {(order?.user_id?.phone) ? order?.user_id?.phone : order?.user_id?.phoneData}
                        <br />
                        Address: {order?.user_id?.address}
                        <br />
                        City: {order?.user_id?.city}
                        <br />
                        State: {order?.user_id?.state}
                        <br />
                    </Descriptions.Item>
                </Descriptions>
            }
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>

    )
};
export default OrderDetails;