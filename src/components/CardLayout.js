import {EllipsisOutlined} from "@ant-design/icons";
import {Card, Alert, Badge} from 'antd'
const CardLayout = ({title, icon, alert, t1, t2, notifs}) => {
    return (
      <Card
        size="small"
        title={title}
        bordered={true}
        hoverable={true}
        extra={
          <a href="#">
            <EllipsisOutlined style={{ color: "#9ba7c8", fontSize: "35px" }} />
          </a>
        }
        className="site-layout-background"
      >
        <div
          style={{
            width: "100%",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
            }}
          >
            <h5>{t1}</h5>
            <Alert
              message={alert}
              type="info"
              style={{ marginTop: "15px", marginBottom: "15px" }}
            />
            {t2 ? <h5>{t2}</h5> : ""}
          </div>
          {notifs ? <Badge dot style={{display: "flex", alignSelf: "center"}}/> : ""}
          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <img src={icon} alt={icon} width="50px" />
          </div>
        </div>
      </Card>
    );
}

export default CardLayout;