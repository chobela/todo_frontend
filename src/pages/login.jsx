import { Input, Col, Row, Form, Button, Checkbox, DatePicker } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { userContext } from "../context/userContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const { user, setUser } = useContext(userContext);

  const onFinish = (values) => {
    // Authenicate user with Basic Auth using axios. url is https://localhost://8080/v1/users/login

    axios
      .post(
        "http://localhost:8080/api/v1/users/login",
        {
          username: values.username,
          password: values.password,
        },
        {
          headers: {
            Authorization:
              "Basic " + btoa(values.username + ":" + values.password),
          },
        }
      )
      .then((response) => {
        console.log(response.data.data.userInfo);
        setUser(response.data.data.userInfo);
        localStorage.setItem("isAuthenticated", response.data.flag);
        localStorage.setItem("token", response.data.data.token);
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });

    // If the user is authenticated, set the user in the context and redirect to the dashboard
    // If the user is not authenticated, show an error message
  };

  return (
    <>
      <div className="section-authentication-cover">
        <div className="">
          <div className="row g-0">
            <div className="col-12 col-xl-7 col-xxl-8 auth-cover-left align-items-center justify-content-center d-none d-xl-flex bg-primary">
              <div className="card rounded-0 mb-0 border-0 bg-transparent">
                <div className="card-body">
                  <img
                    src="assets/images/boxed-login.png"
                    className="img-fluid auth-img-cover-login"
                    width={650}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-5 col-xxl-4 auth-cover-right align-items-center justify-content-center">
              <div className="card rounded-0 m-3 mb-0 border-0">
                <div className="card-body p-sm-5">
                  <img
                    src="assets/images/logo-icon.png"
                    className="mb-4"
                    width={45}
                    alt=""
                  />
                  <h4 className="fw-bold">Get Started Now</h4>
                  <p className="mb-0">
                    Enter your credentials to login your account
                  </p>

                  <div className="form-body mt-4">
                    <Form className="g-3" onFinish={onFinish}>
                      <Col>
                        <Form.Item
                          className="email"
                          labelCol={{ span: 24 }}
                          label="Username"
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your Username",
                            },
                          ]}
                        >
                          <Input placeholder="Username" />
                        </Form.Item>
                      </Col>
                      <Col>
                        <Form.Item
                          className="password"
                          labelCol={{ span: 24 }}
                          label="Password"
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your password",
                            },
                          ]}
                        >
                          <Input.Password
                            placeholder="Enter Password"
                            iconRender={(visible) =>
                              visible ? (
                                <EyeTwoTone />
                              ) : (
                                <EyeInvisibleOutlined />
                              )
                            }
                          />
                        </Form.Item>
                      </Col>

                      <Col span={24}>
                        <Form.Item className="col-12">
                          <Button type="primary" htmlType="submit">
                            Login
                          </Button>
                        </Form.Item>
                      </Col>
                    </Form>
                    <div className="col-12">
                      <div className="text-start">
                        <p className="mb-0">
                          Don't have an account yet?
                          {/* <a href="auth-cover-register.html">Sign up here</a> */}
                          {/* {Nvigate to Signup Component} */}
                          <Button
                            type="link"
                            onClick={() => history.push("/signup")}
                          >
                            Sign up here
                          </Button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
        </div>
      </div>
      {/*authentication*/}
    </>
  );
};

export default Login;
