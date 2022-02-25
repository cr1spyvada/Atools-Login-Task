import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import axios from "axios";

function login() {
  // const [username, Useusername] = useState(null);
  const ApiCall = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    console.log(data.email, " ", data.password);
    axios
      .post("https://reqres.in/api/login", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div className="title">
        <span className="welcome">Welcome Back</span>
        <span className="subheader">Sub-title text goes here</span>
      </div>
      <Form name="basic" onFinish={ApiCall} autoComplete="off">
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email Address *" />
        </Form.Item>
        <Form.Item
          required
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password *" />
        </Form.Item>
        <Form.Item>
          <Button
            id="login2_btn"
            className="btn"
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
        <Form.Item className="details">
          {/* <Form.Item name="remember" valuePropName="checked" noStyle> */}
          <Checkbox className="rp" style={{ "font-size": "1vw" }}>
            Remember password
          </Checkbox>
          {/* </Form.Item> */}
          <a className="fp" style={{ "font-size": "1.2vw" }} href="#">
            Forgot Password?
          </a>
        </Form.Item>
      </Form>
    </div>
  );
}

export default login;
