import React, { useState } from "react";
import "./Cart.css";
import { AiFillHome, AiOutlineMail } from "react-icons/ai";
import {
  MdLocationCity,
  MdOutlineDriveFileRenameOutline,
  MdPinDrop,
  MdPublic,
  MdTransferWithinAStation,
} from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";
// import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { shippingInfo } from "../../Redux/Action/CartAction";
// import { Link } from "react-router-dom";
import { Country, State } from "country-state-city";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const { shippingInfo: localshippingInfo } = useSelector(
    (state) => state.cart
  );
  const [address, setAddress] = useState(localshippingInfo.address);
  const [city, setCity] = useState(localshippingInfo.city);
  const [country, setCountry] = useState(localshippingInfo.country);
  const [state, setState] = useState(localshippingInfo.state);
  const [pinCode, setPinCode] = useState(localshippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(localshippingInfo.phoneNo);
  const [name, setName] = useState(localshippingInfo.name);
  const [email, setEmail] = useState(localshippingInfo.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shippingSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      shippingInfo({ address, city, state, pinCode, phoneNo, name, email })
    );
    navigate("/confirmorder");
  };

  return (
    <section className="container">
      <div className="shippingContainer">
        <div className="shippingBox">
          <div className="shipping-heading">
            <h2 className="shippingHeading">Shipping Details</h2>
          </div>

          <form className="shippingForm" onSubmit={shippingSubmit}>
            <div>
              <AiFillHome />
              <input
                required
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <MdLocationCity />
              <input
                required
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <MdPinDrop />
              <input
                required
                type="number"
                placeholder="Pin Code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>

            <div>
              <GiSmartphone />
              <input
                required
                type="number"
                placeholder="Phone Number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
              />
            </div>

            <div>
              <MdOutlineDriveFileRenameOutline />
              <input
                required
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="10"
              />
            </div>

            <div>
              <AiOutlineMail />
              <input
                required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="10"
              />
            </div>

            <div>
              <MdPublic />
              <select
                className="form-input"
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <MdTransferWithinAStation />
              <select
                className="form-input"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
