import React from 'react';
import './WalletHistoryItem.css';

const WalletHistoryItem = ({title, amount, balance, date}) => {
  return (
    <div className='wallet-history-item' style={{borderLeft: (amount>0) ? ('5px solid green') : ('5px solid red')}}>
        <div className="wallet-history-item__details">
            <div className="wallet-history-item__details--title">
                {title}
            </div>
            <div className="wallet-history-item__details--amount" style={{color: (amount>0) ? ('green') : ('red')}}>
               {(amount>0)? "+" : "-" }{amount}
            </div>
        </div>
        <div className="wallet-history-item__balance">
            <div className="wallet-history-item__balance--date">
                {date}
            </div>
            <div className="wallet-history-item__balance--amount">
                Balance {balance}
            </div>
        </div>
    </div>
  )
}

export default WalletHistoryItem
