import { Checkbox, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { CssInputLoginLabel } from './CssLogin';

import Button from '../button/button';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const App_login = () => (
  <Form name="basic " labelCol={{ span: 8, }} className='flex flex-wrap	justify-center ' wrapperCol={{ span: 16, }} style={{ maxWidth: "100%", color: "#dbe2fb", fontSize: "16px", lineHeight: "28px" }} initialValues={{ remember: true, }}
    layout="vertical"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >

    <Form.Item label={<CssInputLoginLabel>email</CssInputLoginLabel>} name="username" className='w-full'
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]} wrapperCol={{
        span: 24,
      }}>
      <input type='text ' placeholder='Enter Your Email' className='w-full text-gray bg-transparent border-0 border-b-[1px] border-blackInput' />
    </Form.Item>

    <Form.Item label={<CssInputLoginLabel>password</CssInputLoginLabel>} name="password" className='w-full'
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]} wrapperCol={{span: 24,}}
    >
      <input type='Password' placeholder="password" className='w-full text-gray bg-transparent border-0 border-b-[1px] border-blackInput' />
    </Form.Item>
    <Form.Item name="remember" valuePropName="checked" className='w-full' wrapperCol={{ span: 24,}}>
      <div className='flex justify-between'>
        <Checkbox ><label className='text-[#dbe2fb] '>Remember Password</label></Checkbox>
        <NavLink to="/"><label className='text-[#dbe2fb] '>Forget PassWord</label></NavLink>
      </div>
    </Form.Item>
    <Form.Item wrapperCol={{span: 16,}}>
      <Button content="login" backGround="-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)" type="primary" htmlType="submit" />
    </Form.Item>
    <p className="text-white w-full mt-2">Don't have an account?<NavLink to="/SignUp" className="text-green" >Sign up now</NavLink> </p>
  </Form>


);
export default App_login;