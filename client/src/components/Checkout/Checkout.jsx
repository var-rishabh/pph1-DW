import React from 'react'
import "./Checkout.css";
import FormInput from '../FormInput/FormInput';
import { order } from '../../SampleData/order';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const user = useSelector(state => state.userReducer.user);
    const userName = user.displayName;
    const userEmail = user.email;
    const addressDetails = user.address;
    const cityDetails = user.city;
    const zipDetails = user.zip;
    const countryDetails = user.country;
    const phoneDetails = user.phone;
    const [name, setName] = React.useState((userName) ? userName : '');
    const [email, setEmail] = React.useState((userEmail) ? userEmail : '');
    const [phone, setPhone] = React.useState((phoneDetails) ? phoneDetails : '');
    const [address, setAddress] = React.useState((addressDetails) ? addressDetails.address : '');
    const [city, setCity] = React.useState((cityDetails) ? cityDetails : '');
    const [zip, setZip] = React.useState((zipDetails) ? zipDetails : '');
    const [country, setCountry] = React.useState((countryDetails) ? countryDetails : '');
    const [promo , setPromo] = React.useState('');
    const orderDetails = order;
    return (
        <div className='checkout'>
            <div className='checkout__title'>
                Checkout
            </div>
            <div className='checkout__container'>
                <div className='checkout__left'>
                    <div className='checkout__left--title'>
                        Personal Details
                    </div>

                    <div className='checkout__left--form'>
                        <div className='checkout__left--form--item'>
                            <FormInput label='Full Name' type='text' id='fullName' value={name} setInputValue={setName} />
                        </div>
                        <div className='checkout__left--form--item'>
                            <FormInput label='Email' type='email' id='email' value={email} setInputValue={setEmail} isDisabled={(userEmail) ? true : false} />
                        </div>
                        <div className='checkout__left--form--item'>
                            <FormInput label='Phone Number' type='text' id='phone' value={phone} setInputValue={setPhone} isDisabled={(phoneDetails) ? true : false} />
                        </div>
                    </div>
                    <div className='checkout__left--title'>
                        Shipping Details
                    </div>
                    <div className='checkout__left--form'>
                        <div className='checkout__left--form--item'>
                            <FormInput label='Street Address' type='text' id='address' value={address} setInputValue={setAddress} />
                        </div>
                        <div className='checkout__left--form--item cp'>
                            <div className='checkout__left--form--cp--city'>
                                <FormInput label='City' type='text' id='city' value={city} setInputValue={setCity} />
                            </div>
                            <div className='checkout__left--form--cp--zip'>
                                <FormInput label='Zip Code' type='text' id='zip' value={zip} setInputValue={setZip} />
                            </div>
                        </div>
                        <div className='checkout__left--form--item'>
                            <FormInput label='Country' type='text' id='country' value={country} setInputValue={setCountry} />
                        </div>
                    </div>
                </div>
                <div className='checkout__right'>
                    <div className='checkout__right--title'>
                        Order Summary
                    </div>
                    <div className='checkout__right--box'>
                    </div>
                    <div className='checkout__right--promo'>
                        <div className='checkout__right--promo--title'>
                            Apply Promocode
                        </div>
                        <div className='checkout__right--promo--form'>
                            <div className='checkout__right--promo--input'>
                                <FormInput label='Promotion or Discount code' type='text' id='promo' value={promo} setInputValue={setPromo} />
                            </div>
                            <button className='checkout__right--promo--button'>
                                Apply Code
                            </button>
                        </div>
                    </div>
                    <div className='checkout__right--bill'>
                        <div className='checkout__right--bill--item'>
                            <div className='checkout__right--bill--item--title'>
                                Subtotal
                            </div>
                            <div className='checkout__right--bill--item--price'>
                                {orderDetails.subTotal}₹
                            </div>
                        </div>
                        <div className='checkout__right--bill--item'>
                            <div className='checkout__right--bill--item--title'>
                                GST
                            </div>
                            <div className='checkout__right--bill--item--price'>
                                {orderDetails.gst}₹
                            </div>
                        </div>
                        <div className='checkout__right--bill--item'>
                            <div className='checkout__right--bill--item--title'>
                                Total
                            </div>
                            <div className='checkout__right--bill--item--price'>
                                {orderDetails.total}₹
                            </div>
                        </div>
                        <button className='checkout__right--bill--button'>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
            <div className='checkout__foot'>
            </div>
        </div>
    )
}

export default Checkout;