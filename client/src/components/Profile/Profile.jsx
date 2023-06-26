import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateUserProfile } from "../../Actions/User";
import profileSample from "../../Assets/profileSample.jpg";
import WalletHistoryItem from "./WalletHistoryItem";
import EditableProfileItem from "./EditableProfileItem";
import OrderItem from "../OrderItem/OrderItem";
import AddMoneyModal from "./AddMoneyModal";
import HistoryModal from "./HistoryModal";
import { walletBalance, walletHistory } from "../../Actions/Wallet";
import { getServices } from "../../Actions/Order";
import VacationModal from "./VacationModal";
import Wallet from '../../Assets/Icons/wallet.svg';

const Profile = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const { user, isAuthenticated } = useSelector((state) => state.userReducer);
  const { balance, loading, history } = useSelector(
    (state) => state.walletReducer
  );
  const {
    services,
    loading: orderLoading,
  } = useSelector((state) => state.orderReducer);
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
  const [showVacationModal, setShowVacationModal] = useState(false);
  const [vacationOrder, setVacationOrder] = useState(null);
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
    dispatch(getServices());
  }, [dispatch, isAuthenticated]);
  return (
    <>
      <div className="profile">
        <div className="profile__left">
          <div className="profile__left__image">
            <img
              src={user?.photoUrl ? user?.photoUrl : profileSample}
              alt="profile"
            />
          </div>
          <div className="profile__left__name">{user?.displayName}</div>
          <button className="profile__left__logout" onClick={handleLogout}>
            Logout
          </button>
          <div className="profile__left__wallet">
            <div className="profile__left__wallet--icon">
            <img src={Wallet} alt="cart"/>
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
              {!history || history?.length === 0 ? (
                <div className="no-history">No History</div>
              ) : (
                history?.map((item, index) => (
                  <WalletHistoryItem
                    key={item?._id}
                    title={item?.order_type.toUpperCase()}
                    amount={item?.amount}
                    date={new Date(item?.createdAt).toDateString()}
                    balance={item?.balance}
                    transactionType={item?.transaction_type}
                    paymentResponse={item?.payment_response}
                  />
                ))
              )}
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
              editable={!user?.displayName}
            />
            <EditableProfileItem
              title="Phone"
              value={phone}
              setValue={setPhone}
              editable={!user?.phoneNumber}
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
              editable={!user?.email}
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
              {orderLoading ? (
                <div className="loading">
                  <div className="loading__circle"></div>
                </div>
              ) : (
                <>
                  {services?.trials?.map((orderDetails) => (
                    <div key={orderDetails?._id}>
                      <OrderItem
                        img={orderDetails?.product?.images[0]}
                        productName={orderDetails?.product?.title}
                        size={orderDetails?.product?.size}
                        orderType={"trial"}
                        quantity={orderDetails?.days}
                        price={orderDetails?.product?.price * orderDetails?.days}
                      />
                    </div>
                  ))}
                  {services?.subscribes?.map((orderDetails) => (
                    <div
                      key={orderDetails._id}
                      onClick={() => {
                        setShowVacationModal(true);
                        setVacationOrder(orderDetails);
                      }}
                    >
                      <OrderItem
                        img={orderDetails?.product?.images[0]}
                        productName={orderDetails?.product?.title}
                        size={orderDetails?.product?.size}
                        orderType={"subscribe"}
                        quantity={orderDetails?.months}
                        price={
                          orderDetails?.product?.price * orderDetails?.months * 30
                        }
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="profile__right--service--options">
              <button
                className="profile__right--service--options--button"
                onClick={() => setShowHistoryModal(true)}
              >
                History
              </button>
              <button
                className="profile__right--service--options--button"
                onClick={() => (window.location.href = "/product")}
              >
                Add more
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddMoneyModal open={showAddMoneyModal} setOpen={setShowAddMoneyModal} />
      <HistoryModal open={showHistoryModal} setOpen={setShowHistoryModal} />
      <VacationModal
        open={showVacationModal}
        setOpen={setShowVacationModal}
        order={vacationOrder}
      />
    </>
  );
};

export default Profile;
