import React from 'react';
import './HistoryItem.css';

const HistoryItem = ({data}) => {
    const formatDate = (date) => {
        const d = new Date(date);
        const month = d.toLocaleString('default', { month: 'short' });
        return `${d.getDate()}/${month}`;
    }

    const formatOrderType = (type) => {
        return type.charAt(0).toUpperCase() + type.slice(1);
    }

    return (
        <div className="history-item">
            <div className="history-item__left">
                {formatDate(data.delivery_date)}
            </div>
            <div className="history-item__right">
                <div className="history-item__right--title">
                    {data.product_id["name"]}
                </div>
                <div className="history-item__right--type">
                    {formatOrderType(data.order_type)}
                </div>
                <div className="history-item__right--price">
                    Price: ₹ {data.final_price}
                </div>
            </div>
        </div>
    )
}

export default HistoryItem;