import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LeftOutlined,
  RightOutlined,
  PieChartOutlined,
  BarChartOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  BellOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import Graph from "./Graph";
const { Header, Sider, Content } = Layout;

const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            height: "50px",
          }}
        >
          {collapsed ? "" : <h4>Finacular</h4>}
          {collapsed ? (
            <RightOutlined
              className="trigger"
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            />
          ) : (
            <LeftOutlined
              className="trigger"
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            />
          )}
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<PieChartOutlined />}>
            Assets
          </Menu.Item>
          <Menu.Item key="3" icon={<BarChartOutlined />}>
            Tracker
          </Menu.Item>
          <Menu.Item key="4" icon={<CalendarOutlined />}>
            Planning & Advisory
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ float: "right" }}
          >
            <Menu.Item key="1" icon={<SettingOutlined />}></Menu.Item>
            <Menu.Item key="2" icon={<BellOutlined />}></Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "100vh",
          }}
        >
            <Graph style={{width: "100%", height: "50%"}}/>
        </Content>
      </Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ float: "right" }}
        theme="light"
      >
        <Header
          theme="light"
          className="site-layout-background"
          style={{ display: "flex", padding: 0, background: "white" }}
        >
          <Button type="primary" icon={<ThunderboltOutlined />} style={{display: "flex", margin: "auto", alignSelf: "center"}}>
            Actions
          </Button>
        </Header>
        
      </Sider>
    </Layout>
  );
};

export default PageLayout;
