import { Input, Col, Row, Form, Button, Checkbox, DatePicker } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import moment from "moment";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Signup = () => {
  const history = useHistory();

  const onFinish = (values) => {};

  return (
    <div className="section-authentication-cover">
      <div className="">
        <div className="row g-0">
          <div className="col-12 col-xl-7 col-xxl-8 auth-cover-left align-items-center justify-content-center d-none d-xl-flex bg-primary">
            <div className="card rounded-0 mb-0 border-0 bg-transparent">
              <div className="card-body">
                <img
                  src="assets/images/boxed-register.png"
                  className="img-fluid auth-img-cover-login"
                  width={650}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-5 col-xxl-4 auth-cover-right align-items-center justify-content-center">
            <div className="card rounded-0 m-3 border-0">
              <div className="card-body p-sm-5">
                <img
                  src="assets/images/logo-icon.png"
                  className="mb-4"
                  width={45}
                  alt=""
                />
                <h4 className="fw-bold">Get Started Now</h4>
                <p className="mb-0">
                  Enter your credentials to create your account
                </p>

                <div className="form-body mt-4">
                  <Form className="g-3" onFinish={onFinish}>
                    <Col>
                      <Form.Item
                        className="username col-12"
                        label="First Name"
                        labelCol={{ span: 24 }}
                        name="firstName"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your first name",
                          },
                        ]}
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        className="username"
                        labelCol={{ span: 24 }}
                        label="Last Name"
                        name="lastName"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your last name",
                          },
                        ]}
                      >
                        <Input placeholder="Last Name" />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        labelCol={{ span: 24 }}
                        className="email"
                        label="Email Address"
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your email address",
                          },
                        ]}
                      >
                        <Input placeholder="example@user.com" />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        className="password"
                        label="Password"
                        labelCol={{ span: 24 }}
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
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                          }
                        />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        labelCol={{ span: 24 }}
                        className="dob"
                        label="Date of Birth"
                        name="dob"
                        rules={[
                          {
                            required: true,
                            message: "Please select your date of birth",
                          },
                        ]}
                      >
                        <DatePicker style={{ width: "100%" }} />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        labelCol={{ span: 24 }}
                        className="schoolName"
                        label="School Name"
                        name="schoolName"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your school name",
                          },
                        ]}
                      >
                        <Input placeholder="School Name" />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        labelCol={{ span: 24 }}
                        className="grade"
                        label="Grade"
                        name="grade"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your grade",
                          },
                        ]}
                      >
                        <Input type="number" placeholder="Grade" />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        labelCol={{ span: 24 }}
                        name="agreeTerms"
                        valuePropName="checked"
                        className="col-12"
                        rules={[
                          {
                            required: true,
                            message: "You must agree to the Terms & Conditions",
                            type: "boolean",
                          },
                        ]}
                      >
                        <Checkbox>
                          I read and agree to Terms & Conditions
                        </Checkbox>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item className="col-12">
                        <Button type="primary" htmlType="submit">
                          Register
                        </Button>
                      </Form.Item>
                      <Form.Item className="col-12">
                        <Button
                          type="default"
                          onClick={() => {
                            //return to previous page
                            history.goBack();
                          }}
                        >
                          Go Back
                        </Button>
                      </Form.Item>
                    </Col>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end row*/}
      </div>
    </div>
  );
};

export default Signup;
