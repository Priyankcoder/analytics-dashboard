import React, { useState } from "react";
import { Layout, Menu, Button, Avatar, Card, Row, Col, Alert, Badge} from "antd";
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
  SettingFilled,
  BellFilled,
  BellOutlined,
  ThunderboltOutlined,
  DownOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import Graph from "./Graph";
import CardLayout from "./CardLayout";
import { Doughnut } from "react-chartjs-2";
const { Header, Sider, Content } = Layout;

const { Meta } = Card;
const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    // Left Sidebar
    <Layout className="site-layout">
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        className="site-layout-background"
        style={{ position: "relative", zIndex: "10" }}
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
            marginTop: "20px",
          }}
        >
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            style={{ border: "solid 2px #01048a" }}
          />
          <h4
            style={{
              margin: "auto auto auto 5px",
            }}
          >
            Vandana M
          </h4>
          <DownOutlined style={{ color: "#01048a" }} />
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ height: "fit-content" }}
        >
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            mode="horizontal"
            style={{ float: "right" }}
          >
            <Menu.Item
              key="1"
              icon={
                <SettingFilled style={{ color: "#a6a4a4", fontSize: "20px" }} />
              }
            ></Menu.Item>
            <Menu.Item
              key="2"
              icon={
                <Badge dot>
                  <BellFilled style={{ color: "#a6a4a4", fontSize: "20px" }} />
                </Badge>
              }
            ></Menu.Item>
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
                notifs="true"
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CardLayout
                title="Growth Rate"
                icon={growth}
                t1="Enter Growth Rate"
                alert="9.3%"
                t2="Inflation &nbsp;&nbsp; 6 %"
                notifs="true"
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
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
        style={{ float: "right" }}
        theme="light"
        className="site-layout-background"
        style={{ position: "relative", zIndex: "10" }}
      >
        <Header
          theme="light"
          className="site-layout-background"
          style={{ display: "flex", padding: 0, background: "white" }}
          className="site-layout-background"
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
        <Content
          className="site-layout"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Card
            size="small"
            style={{
              width: 180,
              backgroundColor: "#fafafd",
              marginTop: "10vh",
              marginBottom: "5vh",
            }}
          >
            <img src={plant} alt="compounding" width="95%" />
            <p>Understand the power of compounding</p>
            <Button
              style={{
                backgroundColor: "#01048a",
                color: "white",
                width: "90%",
                borderRadius: "5px",
              }}
            >
              Learn Now
            </Button>
          </Card>
          <Card size="small" style={{ width: 180, backgroundColor: "#fafafd" }}>
            <img src={reception} alt="compounding" width="95%" />
            <p>Track all your expenses on daily basis</p>
            <Button
              style={{
                backgroundColor: "#01048a",
                color: "white",
                width: "90%",
              }}
            >
              Track Now
            </Button>
          </Card>
        </Content>
      </Sider>
    </Layout>
  );
};

export default PageLayout;
