import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateUserProfile } from "../../Actions/User";
import profileSample from "../../Assets/profileSample.jpg";
import WalletHistoryItem from "./WalletHistoryItem";
import EditableProfileItem from "./EditableProfileItem";
import OrderItem from "../OrderItem/OrderItem";
import { order } from "../../SampleData/order";
import AddMoneyModal from "./AddMoneyModal";
import HistoryModal from "./HistoryModal";
import CalenderModal from "./CalenderModal";
import { walletBalance, walletHistory } from "../../Actions/Wallet";

const Profile = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const { user, isAuthenticated } = useSelector((state) => state.userReducer);
  const { balance, loading, history } = useSelector(
    (state) => state.walletReducer
  );
  const [name, setName] = useState(
    user.displayName ? user.displayName : user.name
  );
  const [phone, setPhone] = useState(
    user.phoneNumber ? user.phoneNumber : user.phoneData
  );
  const [altPhone, setAltPhone] = useState(user.altPhone);
  const [email, setEmail] = useState(user.email ? user.email : user.emailData);
  const [address, setAddress] = useState(user.address);
  const [altAddress, setAltAddress] = useState(user.altAddress);
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showCalenderModal, setShowCalenderModal] = useState(false);
  const profileUpdateHanlder = () => {
    dispatch(
      updateUserProfile({
        name: name || "",
        phoneData: phone || "",
        altPhone: altPhone || "",
        emailData: email || "",
        address: address || "",
        altAddress: altAddress || "",
      })
    );
  };
  useEffect(() => {
    dispatch(walletBalance());
    dispatch(walletHistory());
  }, [dispatch, isAuthenticated]);
  const orderDetails = order;
  return (
    <>
      <div className="profile">
        <div className="profile__left">
          <div className="profile__left__image">
            <img
              src={user.photoUrl ? user.photoUrl : profileSample}
              alt="profile"
            />
          </div>
          <div className="profile__left__name">{user.displayName}</div>
          <button className="profile__left__logout" onClick={handleLogout}>
            Logout
          </button>
          <div className="profile__left__wallet">
            <div className="profile__left__wallet--icon">
              <svg
                width="35"
                height="31"
                viewBox="0 0 35 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9001 10H9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.5422 12.6326C25.8492 13.3091 25.4532 14.2826 25.5522 15.3221C25.7007 17.1041 27.3342 18.4076 29.1162 18.4076H32.3503V20.8002C32.3503 25.7502 29.0502 29.0502 24.1002 29.0502H9.25007C4.30003 29.0502 1 25.7502 1 20.8002V9.25007C1 4.76203 3.70602 1.62701 7.91356 1.099C8.34256 1.033 8.78807 1 9.25007 1H24.1002C24.5292 1 24.9417 1.01648 25.3377 1.08248C29.5947 1.57749 32.3503 4.72903 32.3503 9.25007V11.6426H28.9182C27.9942 11.6426 27.1527 12.0056 26.5422 12.6326Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.7502 13.2503V16.6495C33.7502 17.557 33.0242 18.2994 32.1002 18.3324H28.866C27.084 18.3324 25.4507 17.0289 25.3022 15.2469C25.2032 14.2074 25.599 13.2338 26.292 12.5573C26.9025 11.9303 27.7442 11.5674 28.6682 11.5674H32.1002C33.0242 11.6004 33.7502 12.3428 33.7502 13.2503Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="profile__left__wallet--amount">
              {loading ? (
                <div className="loading">
                  <div className="loading__circle"></div>
                </div>
              ) : (
                `₹ ${balance}`
              )}
            </div>
          </div>
          <button
            className="profile__left__wallet--button"
            onClick={() => setShowAddMoneyModal(true)}
          >
            + Add Money
          </button>
          <div className="profile__left__wallet-history">
            <div className="profile__left__wallet-history--title">Wallet</div>
            <div className="profile__left__wallet-history--list">
              {history.map((item, index) => (
                <WalletHistoryItem
                  key={item._id}
                  title={item.order_type.toUpperCase()}
                  amount={item.amount}
                  date={new Date(item.createdAt).toDateString()}
                  balance={item.balance}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="profile__right">
          <div className="profile-text">Profile</div>
          <div className="profile__right--personal">
            <EditableProfileItem
              title="Name"
              value={name}
              setValue={setName}
              editable={!user.displayName ? true : false}
            />
            <EditableProfileItem
              title="Phone"
              value={phone}
              setValue={setPhone}
              editable={!user.phoneNumber ? true : false}
            />
            <EditableProfileItem
              title="Alternate Phone"
              value={altPhone}
              setValue={setAltPhone}
            />
            <EditableProfileItem
              title="Email"
              value={email}
              setValue={setEmail}
              editable={!user.email ? true : false}
            />
            <EditableProfileItem
              title="Address"
              value={address}
              setValue={setAddress}
            />
            <EditableProfileItem
              title="Alternate Address"
              value={altAddress}
              setValue={setAltAddress}
            />
            <div className="profile__right--personal--buttons">
              <button
                className="profile__right--personal--button"
                onClick={profileUpdateHanlder}
              >
                Save
              </button>
            </div>
          </div>
          <div className="profile__right--service">
            <div className="profile__right--service--title">
              Active Services
            </div>
            <div className="profile__right--service--list">
              <OrderItem
                img={orderDetails.product.image}
                productName={orderDetails.product.title}
                size={orderDetails.product.size}
                orderType={orderDetails.type}
                quantity={orderDetails.quantity}
                price={orderDetails.total}
              />
            </div>
            <button
              className="profile__right--service--button"
              onClick={() => (window.location.href = "/product")}
            >
              Add More
            </button>

            <div className="profile__right--service--options">
              <button
                className="profile__right--service--options--button"
                onClick={() => setShowHistoryModal(true)}
              >
                History
              </button>
              <button
                className="profile__right--service--options--button"
                onClick={() => setShowCalenderModal(true)}
              >
                Calender
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddMoneyModal open={showAddMoneyModal} setOpen={setShowAddMoneyModal} />
      <HistoryModal open={showHistoryModal} setOpen={setShowHistoryModal} />
      <CalenderModal open={showCalenderModal} setOpen={setShowCalenderModal} />
    </>
  );
};

export default Profile;
