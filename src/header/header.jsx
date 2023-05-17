import { Layout, Button, Menu, theme, Drawer, Dropdown, Space } from "antd";
import { useState , useEffect } from "react";
import { TagANavbar } from "../HomePage/CsscontentHomePage.jsx";
import { DivHeader, MenuHeader } from "./cssheader.jsx";
import ButtonComponent from "../button/button.jsx";
import { MenuOutlined } from "@ant-design/icons"
import Logo from "./imgHeader/logo.png";
const { Header, Content, Footer } = Layout;
const PageHeader = () => {
  const [heightScroll, setHeightScroll] = useState(0);
  
  useEffect(() => {
    const onScroll = () => setHeightScroll(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const items = [

    {
      label: <TagANavbar href="#0">Home </TagANavbar>,
    },
    {
      label: <TagANavbar href="#0">movies</TagANavbar>,
    },
    {
      label: <TagANavbar href="#0">Events</TagANavbar>,
    },
    {
      label: <a href="#0">sports</a>,
    },
    {
      label: <a href="#0">pages</a>,
    },
    {
      label: <a href="#0">blog</a>,
    },
    {
      label: <a href="#0">contact</a>,
    },
    {
      label: <ButtonComponent content="JoinUs" backGround="-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)" type="primary" htmlType="submit" />

    }
  ];
  //bg-[#001232]
  function ChangeNaBar(){

  }
  function AppMenu({ inInline = false }) {
    return (
      <Menu
        mode={inInline ? "inline" : "horizontal"}
        items={items}
        className="w-full text-[#e9eeff] uppercase text-lg font-bold	 "
        style={{
          background: inInline ? "#0a1e5e" : "none",
          width: inInline ? "100%" : "̀58,33%",
          display: inInline ? "block" : "flex",
          alignItems: "center",
        }}
      ></Menu>
    )
  }
  return (
    <DivHeader 
      style={{
        backgroundColor: (heightScroll > 10) ? "#001232" : "" ,
      }}
    >
      <div className="w-3/12">
        <img src={Logo} />
      </div>
      <MenuHeader className="menu-Header " style={{zIndex : 99}}>
        <AppMenu />
      </MenuHeader>
      
      <Button type="primary" onClick={showDrawer} className="hidden" >
        <MenuOutlined></MenuOutlined>
      </Button>
      <Drawer placement="left" onClose={onClose} open={open}  bodyStyle={{backgroundColor : "#0a1e5e" , zIndex : 1}} closable = {true}>
        <AppMenu inInline />
      </Drawer>
    </DivHeader>
  );
};
export default PageHeader;
