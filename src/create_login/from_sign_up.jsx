import createSagaMiddleware from "redux-saga";
import { Checkbox, Form, Result } from "antd";
import { NavLink } from "react-router-dom";
import Button from "../button/button";
import { addRegister } from "../redux/Slice/sliceLogin.js";
import { CssInputLoginLabel } from "./CssLogin";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useLayoutEffect } from "react";

function SetAuth() {
  const dispatch = useDispatch();
  const sagaMiddleware = createSagaMiddleware();
  const [meta, setMeta] = useState({
    email: null,
    password: null,
  });
  const onFinish = (values) => {
    if (values.password != values.confirm_password) {
      alert("confirm password difference");
      return false;
    } else {
      setMeta((meta) => ({
        ...meta,
        email: values.email,
        password: values.password,
      }));
    }
  };
  useLayoutEffect(() => {
    if (meta.email != null){
    dispatch(
      addRegister({
        email: meta.email,
        password: meta.password,
      })
    );
    }
  }, [meta.email , meta.password ]);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic "
      labelCol={{ span: 8 }}
      className="flex flex-wrap	justify-center max-w-full"
      wrapperCol={{ span: 16 }}
      style={{
        maxWidth: "100%",
        color: "#dbe2fb",
        fontSize: "16px",
        lineHeight: "28px",
      }}
      initialValues={{ remember: true }}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={<CssInputLoginLabel> email </CssInputLoginLabel>}
        name="email"
        className="w-full"
        rules={[
          {
            required: true,
            message: "Please input your " + `email`,
          },
        ]}
        wrapperCol={{
          span: 24,
        }}
      >
        <input
          type="text"
          placeholder="Enter Your Email"
          className="w-full text-gray  bg-transparent border-0 border-b-[1px] border-blackInput"
        />
      </Form.Item>
      <Form.Item
        label={<CssInputLoginLabel> password </CssInputLoginLabel>}
        name="password"
        className="w-full"
        rules={[
          {
            required: true,
            message: "Please input your" + `password`,
          },
        ]}
        wrapperCol={{
          span: 24,
        }}
      >
        <input
          type="password"
          placeholder="Password"
          className="w-full text-gray bg-transparent border-0 border-b-[1px] border-blackInput"
        />
      </Form.Item>
      <Form.Item
        label={<CssInputLoginLabel> password </CssInputLoginLabel>}
        name="confirm_password"
        className="w-full"
        rules={[
          {
            required: true,
            message: "Please input your " + `CONFIRM PASSWORD`,
          },
        ]}
        wrapperCol={{
          span: 24,
        }}
      >
        <input
          type="password"
          placeholder="Password"
          className="w-full text-gray bg-transparent border-0 border-b-[1px] border-blackInput"
        />
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        className="w-full"
        wrapperCol={{
          span: 24,
        }}
      >
        <div className="text-left ">
          <Checkbox>
            <label className="text-[#dbe2fb] ">
              I Agree To The{" "}
              <a className="text-green">Terms , Privacy Policy </a>And{" "}
              <a className="text-green">Fees</a>
            </label>
          </Checkbox>
        </div>
      </Form.Item>
      <Button
        content="Sign up"
        backGround="-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)"
        type="primary"
        htmlType="submit"
      />
      <p className="w-full mt-2">
        Already have an account?
        <NavLink to="/create/login" className="text-green">
          Login
        </NavLink>
      </p>
    </Form>
  );
}
export default SetAuth;
