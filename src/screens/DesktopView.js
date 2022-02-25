import { Button, Image, PageHeader } from "antd";
import Login from "../components/login";

const DesktopComponent = () => {
  return (
    <div>
      <PageHeader
        className="header"
        title="ATools"
        extra={[
          <Button className="btn" id="trial_btn" type="primary">
            Start Free Trial
          </Button>,
          <Button className="btn" id="login_btn" type="primary">
            Login
          </Button>,
        ]}
      />
      <div className="body">
        <Login />
        <div className="image-container">
          <img
            src={require("../assets/bg.png")}
            className="App-logo"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};
export default DesktopComponent;
