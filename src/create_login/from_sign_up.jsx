import { Checkbox, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import Button from '../button/button';
import { CssInputLoginLabel } from './CssLogin';

const onFinish = (values) => {
  console.log('Success:', values);
  if (values.Password != values.confirm_password) {
    alert("confirm password difference");
    return false;
  }
  console.log("a");
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const App_Sign_up = () => (
  <Form name="basic " labelCol={{ span: 8, }} className='flex flex-wrap	justify-center max-w-full' wrapperCol={{ span: 16, }} style={{ maxWidth: "100%", color: "#dbe2fb", fontSize: "16px", lineHeight: "28px" }} initialValues={{ remember: true, }}
    layout="vertical"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item label={
      <CssInputLoginLabel> email </CssInputLoginLabel>} name="email" className='w-full'
      rules={[
        {
          required: true,
          message: 'Please input your ' + `email`,
        },
      ]} wrapperCol={{
        span: 24,
      }}>
      <input type='text ' placeholder='Enter Your Email' className='w-full text-gray bg-transparent border-0 border-b-[1px] border-blackInput' />
    </Form.Item>
    <Form.Item label={
      <CssInputLoginLabel> password </CssInputLoginLabel>} name="password" className='w-full'
      rules={[
        {
          required: true,
          message: 'Please input your' + `password`,
        },
      ]} wrapperCol={{
        span: 24,
      }}>
      <input type='password' placeholder='Password' className='w-full text-gray bg-transparent border-0 border-b-[1px] border-blackInput' />
    </Form.Item>
    <Form.Item label={<CssInputLoginLabel> password </CssInputLoginLabel>} name="confirm_password" className='w-full'
      rules={[
        {
          required: true,
          message: 'Please input your ' + `CONFIRM PASSWORD`,
        },
      ]} wrapperCol={{
        span: 24,
      }}>
      <input type='password' placeholder='Password' className='w-full text-gray bg-transparent border-0 border-b-[1px] border-blackInput' />
    </Form.Item>
    <Form.Item
      name="remember"
      valuePropName="checked"
      className='w-full'
      wrapperCol={{
        span: 24,
      }}
    >
      <div className='text-left '>
        <Checkbox ><label className='text-[#dbe2fb] ' >I Agree To The <a className="text-green" >Terms ,  Privacy Policy </a>And <a className="text-green">Fees</a></label></Checkbox>
      </div>
    </Form.Item>
    <Button content="Sign up" backGround="-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)" type="primary" htmlType="submit" />
    <p className='w-full mt-2'>Already have an account?<NavLink to="/login" className="text-green">Login</NavLink></p>
  </Form>
)
export default App_Sign_up;