import React from 'react'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Actions/User';

const Profile = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }
    const { user } = useSelector(state => state.userReducer)
    return (
        <div className="profile">
            Hello! {user.displayName}
            <button className="profile__button" onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default Profile
