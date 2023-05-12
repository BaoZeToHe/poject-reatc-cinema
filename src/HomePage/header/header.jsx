import { Breadcrumb, Layout, Menu, theme, Dropdown, Space } from 'antd';
import Button from '../../button/button.jsx';
import Logo from '../imgHeader/logo.png';
const { Header, Content, Footer } = Layout;
const PageHeader = () => {
  const { token: { colorBgContainer }, } = theme.useToken();
  const CssUl = {
    color: "#e9eeff",
    fontSize: "16px",
    fontWeight: 700,
    textTransform: "uppercase",
    padding: "5px"
  }
  const items = [
    {
      label: (<a href="#0"  >Home One</a>),
    },
    {
      label: (<a href="#0" >Home Two</a>),
    },

  ];

  return (
    <Header className="layout bg-transparent w-full h-auto py-6 " style={{ position: 'fixed', top: 0, zIndex: 99 , borderBottom: "1px solid rgba(255, 255, 255, 0.102)" }} >
      <div className='flex justify-evenly items-center  ' style={{opacity : 1}}>
        <div >
          <img src={Logo} />
        </div>
        <div className=' '>
          <Dropdown menu={{ items, }} >
            <a onClick={(e) => e.preventDefault()} className='mx-4'>
              <Space style={CssUl}>Home</Space>
            </a>
          </Dropdown>
          <Dropdown menu={{ items, }} >
            <a onClick={(e) => e.preventDefault()} className='mx-4'>
              <Space style={CssUl}>Movie</Space>
            </a>
          </Dropdown>
          <Dropdown menu={{ items, }} >
            <a onClick={(e) => e.preventDefault()} className='mx-4'>
              <Space style={CssUl}>Events</Space>
            </a>
          </Dropdown>
          <Dropdown menu={{ items, }} >
            <a onClick={(e) => e.preventDefault()} className='mx-4'>
              <Space style={CssUl}>Sports</Space>
            </a>
          </Dropdown>
          <Dropdown menu={{ items, }} >
            <a onClick={(e) => e.preventDefault()} className='mx-4'>
              <Space style={CssUl}>pages</Space>
            </a>
          </Dropdown>
          <Dropdown menu={{ items, }} >
            <a onClick={(e) => e.preventDefault()} className='mx-4'>
              <Space style={CssUl}>Blog</Space>
            </a>
          </Dropdown>
          <Dropdown menu={{ items, }} >
            <a onClick={(e) => e.preventDefault()} className='mx-4'>
              <Space style={CssUl}>contact</Space>
            </a>
          </Dropdown>
          <Button content="Join Us" backGround="-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 43%, #ff4343 100%)" type="primary" htmlType="submit" ></Button>
        </div>
        {/* </Header> */}
      </div>
    </Header>
  )
}
export default PageHeader