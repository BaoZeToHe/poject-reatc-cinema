import {
  DivFooter,
  DivInputFooter,
  DivContentFooter,
  DivH5,
  DivH3,
  DivInput,
  DivInformationFooter,
  DivInforMationBottom,
  CssA,
} from "./cssFooter";
import Button from "../button/button";
import {
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
} from "@ant-design/icons";

function Footer() {
  return (
    <DivFooter>
      <DivInputFooter>
        <DivContentFooter>
          <div className="mb-10">
            <DivH5>subscribe to Boleto </DivH5>
            <DivH3>to get exclusive benifits</DivH3>
          </div>
          <div className="flex">
            <DivInput type="text" placeholder="Your Email Address" />
            <div className="absolute right-0">
              <Button
                content="subscribe"
                backGround="-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 43%, #ff4343 100%)"
                type="primary"
                htmlType="submit"
              ></Button>
            </div>
          </div>
          <p className="text-white mt-9">
            We respect your privacy, so we never share your info
          </p>
        </DivContentFooter>
      </DivInputFooter>
      <DivInformationFooter>
        <div className="w-4/12 relative z-50">
          <img src="../imgFooter/logo.png" />
        </div>
        <ul className="w-8/12 flex justify-end gap-5">
          <li>
            <CssA to="/facebook">
              <FacebookFilled />
            </CssA>
          </li>
          <li>
            <CssA to="/twitter">
              <TwitterCircleFilled />
            </CssA>
          </li>
          <li>
            <CssA to="/instagram">
              <InstagramFilled />
            </CssA>
          </li>
        </ul>
      </DivInformationFooter>
      <DivInforMationBottom>
        <div className="w-4/12">
          Copyright © 2020.All Rights Reserved By
          <a className="text-green">Boleto</a>
        </div>
        <ul className="w-8/12 flex justify-end gap-5">
          <li>
            <a href="#0" class="L-Affiliate-Tagged">
              About
            </a>
          </li>
          <li>
            <a href="#0" class="L-Affiliate-Tagged">
              Terms Of Use
            </a>
          </li>
          <li>
            <a href="#0" class="L-Affiliate-Tagged">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#0" class="L-Affiliate-Tagged">
              FAQ
            </a>
          </li>
          <li>
            <a href="#0" class="L-Affiliate-Tagged">
              Feedback
            </a>
          </li>
        </ul>
      </DivInforMationBottom>
    </DivFooter>
  );
}
export default Footer;
