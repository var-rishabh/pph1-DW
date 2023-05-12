import { PieChartOutlined, UserOutlined, DesktopOutlined, OrderedListOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Layout, Menu, Popover, Typography } from 'antd';
import { useState } from 'react';
import fullLogo from '../../Assets/fullLogo.png';
import mainLogo from '../../Assets/mainLogo.png';
import './MainLayout.css';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
    href: `/${label.toLowerCase()}`,
  };
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const items = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Orders', '2', <DesktopOutlined />),
  getItem('Products', '3', <OrderedListOutlined />),
  getItem('Users', '4', <UserOutlined />),
];

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const currentKey = window.location.pathname.split('/')[1];
  const defaultSelectedKey = items.find((item) => item.label.toLowerCase() === currentKey)?.key || '1';
  const breadcrumbList = window.location.pathname.split('/').filter((item) => item !== '')
  const breadcrumbItems = breadcrumbList.map((item) => ({ title: capitalizeFirstLetter(item) }));
  const selectKeyHandler = (e) => {
    if (e.key === '1') {
      window.location = '/';
    } else {
      window.location = items.find((item) => item.key === e.key).href;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); window.location = '/login';
  }
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            margin: 16,
            textAlign: 'center',
            padding: 8,
            background: "#ffffff",
            borderRadius: 5,
          }}
        >
          {collapsed ? <img src={mainLogo} alt="logo" height={30} /> : <img src={fullLogo} alt="logo" height={45} />}
        </div>
        <Menu theme="dark" defaultSelectedKeys={[defaultSelectedKey]} mode="inline" items={items} onSelect={selectKeyHandler} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 0,
            background: "#ffffff"
          }}
        >
          <Popover content={<Typography className="Logout" onClick={handleLogout}>
            <Typography.Text strong>Logout</Typography.Text>
          </Typography>} placement="bottomRight">
            <Avatar
              style={{
                marginLeft: "auto",
                marginRight: 16,
              }}
              size={40}
              icon={<UserOutlined />} />
          </Popover>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '8px 0',
            }}
            items={(breadcrumbItems.length > 0) ? breadcrumbItems : [{ title: 'Dashboard' }]}
          />
          <Content style={{ padding: 12, minHeight: 640, background: "#ffffff", borderRadius: 5 }}><Outlet /></Content>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Aapkadhoodwala ©2023 Created by Aapkadhoodwala
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
