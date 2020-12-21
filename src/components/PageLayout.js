import React, { useState } from "react";
import { Layout, Menu, Button, Avatar, Card, Row, Col, Alert} from "antd";
import logo from "../images/logo.png";
import property from "../images/property.png";
import copter from "../images/copter.png";
import plant from "../images/plant.png";
import doughnut from "../images/doughnut.png";
import growth from "../images/growth.png";
import reception from "../images/reception.png";



import {
  LeftOutlined,
  RightOutlined,
  PieChartOutlined,
  BarChartOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  BellOutlined,
  ThunderboltOutlined,
  DownOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import Graph from "./Graph";
import CardLayout from "./CardLayout";
import { Doughnut } from "react-chartjs-2";
const { Header, Sider, Content } = Layout;

const {Meta} = Card;
const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout>
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          className="logo"
          style={{
            width: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "50px",
            marginLeft: "5px",
            marginBottom: "60px",
            fontSize: "20px",
          }}
        >
          <img
            src={logo}
            alt="logo"
            width="40"
            style={{ marginLeft: "10px", marginRight: "5px" }}
          />
          <h4 style={{ marginTop: "auto", marginBottom: "auto" }}>Finacular</h4>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<AppstoreOutlined size="large" />}>
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
        <div
          style={{
            width: "170px",
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "space-evenly",
            alignItems: "center",
            alignSelf: "center",
            textAlign: "center",
            verticalAlign: "center",
            marginTop: "15px",
          }}
        >
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            style={{ border: "solid 2px #01048a" }}
          />
          <h4
            style={{
              marginRight: "auto",
              marginLeft: "5px",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            Vandana M
          </h4>
          <DownOutlined style={{ color: "#01048a" }} />
        </div>
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
            margin: "25px 25px",
          }}
        >
          <div className="graph-wrapper">
            <Graph />
          </div>
        </Content>
        <Content
          style={{
            margin: "25px 25px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <Row gutter={[30, 30]}>
            <Col xs={24} sm={12} md={8}>
              <CardLayout
                title="Asset Balance"
                icon={property}
                t1="Enter amount:"
                alert="₹ 1,25,000"
                t2="Last Updated &nbsp;&nbsp; 3 Dec"
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CardLayout
                title="Growth Rate"
                icon={growth}
                t1="Enter Growth Rate"
                alert="9.3%"
                t2="Inflation &nbsp;&nbsp; 6 %"
              />
            </Col>
            <Col xs={24} sm={12} md={8} >
              <CardLayout
                title="Major Investments"
                icon={property}
                t1="Returns generated per month"
                alert="₹ 1,25,000"
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CardLayout
                title="Financial Independence"
                icon={copter}
                t1="Age"
                alert="45 years"
                t2="Optimised &nbsp;&nbsp; yes no"
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CardLayout
                title="Average Expenses"
                icon={doughnut}
                t1="Amount"
                alert="₹ 25,000"
                t2="3 months average &nbsp;&nbsp; ₹ 40,000"
              />
            </Col>
          </Row>
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
          <Button
            type="primary"
            icon={<ThunderboltOutlined />}
            style={{
              display: "flex",
              margin: "auto",
              alignSelf: "center",
              alignItems: "center",
              backgroundColor: "#01048a",
            }}
          >
            Actions
          </Button>
        </Header>
      </Sider>
    </Layout>
  );
};

export default PageLayout;
