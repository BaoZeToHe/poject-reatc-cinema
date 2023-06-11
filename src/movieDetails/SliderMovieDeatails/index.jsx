import {
  DivSlierContent,
  DivOfferItem,
} from "../cssMovieDetails";
import ImgPay1 from "../imgMovieDetails/offer01.png"
import ImgPay2 from "../imgMovieDetails/offer02.png"
import ImgPay3 from "../imgMovieDetails/offer03.png"
import ImgAdvertisement from "../imgMovieDetails/banner01.jpg"
import { NavLink } from "react-router-dom";
function SliderMovieDetails() {
  return (
    <DivSlierContent>
      <ul className="flex m-[-10px] mt-3 mb-3">
        <li>
          <NavLink to="/">2D</NavLink>
        </li>
        <li>
          <NavLink to="/">IMAX 2D</NavLink>
        </li>
        <li>
          <NavLink to="/">IMAX 4D</NavLink>
        </li>
      </ul>
      <div>
        <h3>Applicable offer</h3>
        <div className="mb-[-30px]">
          <DivOfferItem>
            <div className="mb-[33px]">
              <img src={ImgPay1} alt="" />
            </div>
            <div>
              <h6>Amazon Pay Cashback Offer</h6>
              <p>Win Cashback Upto Rs 300*</p>
            </div>
          </DivOfferItem>
          <DivOfferItem>
            <div className="mb-[33px]">
              <img src={ImgPay2} alt="" />
            </div>
            <div>
              <h6>PayPal Offer</h6>
              <p>Transact first time with Paypal and
                get 100% cashback up to Rs. 500</p>
            </div>
          </DivOfferItem>
          <DivOfferItem>
            <div className="mb-[33px]">
              <img src={ImgPay3} alt="" />
            </div>
            <div>
              <h6>HDFC Bank Offer</h6>
              <p>Get 15% discount up to INR 100*
                and INR 50* off on F&B T&C apply</p>
            </div>
          </DivOfferItem>
        </div>
      </div>
      <div className="mt-10">
        <img src={ImgAdvertisement} className="w-full " />
      </div>
    </DivSlierContent>
  );
}

export default SliderMovieDetails;
