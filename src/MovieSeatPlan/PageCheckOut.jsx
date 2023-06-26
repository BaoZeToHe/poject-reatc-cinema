import {
  DivSeatPlan,
  DivInforMation,
  DivContainer,
  DivPageCheckOut,
  DivReceipt,
  TagA,
  TagH4,
  InputContact,
  DivInput,
  TagUlReceipt,
  TagUlReceipt2,
  DivCheckOutReceipt,
} from "./CssMovieSeatPlan";
import ButtonComponent from "../button/button";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import history from "../services/history";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { getCheckOutRequest } from "../redux/Slice/sliceSaveCheckOut";
import jwt_decode from "jwt-decode";

function PageCheckOut(progs) {
  const token = localStorage.getItem("Login_User_Movie");
  let decodedToken = jwt_decode(token);
  let { id_movie, showtime, date } = useParams();
  const dataChairBy = useSelector((state) => state.DataChairBy);
  let dispatch = useDispatch();

  if (dataChairBy.dataChairBy.length == 0) {
    history.push(`/movie-seat-plan/book-king/${id_movie}/${showtime}/${date}`);
  }
  function checkOut() {
    dispatch(
      getCheckOutRequest({
        email: decodedToken.email,
        byChair: dataChairBy.dataChairBy,
        id_showtime: parseInt(showtime),
        total: dataChairBy.totalPrice,
      })
    );
    alert("Bạn Đã Mua Vế Thành Công");
    history.push(`/`);
  }
  return (
    <DivSeatPlan>
      {progs.data.map((item, index) => {
        return (
          <DivContainer>
            <DivPageCheckOut>
              <div className="w-2/3 px-7">
                <DivInforMation>
                  <div>
                    <h5>Already a Boleto Member?</h5>
                    <p>Sign in to earn points and make booking easier!</p>
                  </div>
                  <TagA href="#0" class="sign-in-area">
                    <UserOutlined />
                    <a>{decodedToken.email}</a>
                  </TagA>
                </DivInforMation>
                <DivInforMation className="flex-wrap">
                  <TagH4>Share your Contact Details</TagH4>
                  <form>
                    <DivInput>
                      <InputContact type="text" placeholder="Full Name" />
                    </DivInput>
                    <DivInput>
                      <InputContact type="text" placeholder="Full Name" />
                    </DivInput>
                    <DivInput>
                      <InputContact type="text" placeholder="Full Name" />
                    </DivInput>
                    <DivInput>
                      <ButtonComponent
                        content="Continue"
                        backGround="-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)"
                      ></ButtonComponent>
                    </DivInput>
                  </form>
                </DivInforMation>
                <DivInforMation className="flex-wrap">
                  <TagH4>Promo Code </TagH4>
                  <form>
                    <DivInput>
                      <InputContact
                        type="text"
                        placeholder="Please enter promo code"
                      />
                    </DivInput>
                    <DivInput>
                      <ButtonComponent
                        content="Verify"
                        backGround="-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)"
                      ></ButtonComponent>
                    </DivInput>
                  </form>
                </DivInforMation>
              </div>
              <DivReceipt className="w-1/3 px-4">
                <h4>booking summery</h4>
                <TagUlReceipt>
                  <li>
                    <h6>{item.name}</h6>
                    <span>English-2d</span>
                  </li>
                  <li>
                    <h6>
                      <span>City Walk</span>
                      <span>02</span>
                    </h6>
                    <div>
                      {progs.dataShowTime.data.map((item) => {
                        return <span>{item.time}</span>;
                      })}
                    </div>
                  </li>
                  <li>
                    <h6>
                      <span>Name Chair</span>
                      <span>
                        {dataChairBy.dataChairBy.map((item) => {
                          return (
                            <>
                              <span>{item.name}</span>
                              <p></p>
                            </>
                          );
                        })}
                      </span>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <span>Tickets Price</span>
                      <span>${dataChairBy.totalPrice}</span>
                    </h6>
                  </li>
                </TagUlReceipt>
                <TagUlReceipt2>
                  <li>
                    <DivCheckOutReceipt>
                      <h6>
                        <span>Amount Payable</span>
                        <span>${dataChairBy.totalPrice}</span>
                      </h6>
                      <ButtonComponent
                        content="proceed"
                        backGround="-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)"
                        onClick={checkOut}
                      ></ButtonComponent>
                    </DivCheckOutReceipt>
                  </li>
                </TagUlReceipt2>
              </DivReceipt>
            </DivPageCheckOut>
          </DivContainer>
        );
      })}
    </DivSeatPlan>
  );
}
export default PageCheckOut;
