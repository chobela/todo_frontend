import {
  Input,
  Col,
  Row,
  Form,
  Button,
  Checkbox,
  DatePicker,
  InputNumber,
  Typography,
  Card,
} from "antd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
const AddTodo = () => {
  const { Title } = Typography;
  const history = useHistory();

  const onFinish = (values) => {
    const data = {
      name: values.name,
      description: values.description,
      isDone: false,
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    };

    axios
      .post("http://localhost:8080/api/v1/items", data, { headers })
      .then((res) => {
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12}>
            <Card>
              <Title level={5}>Create Todo Item</Title>
              <Form name="myForm" onFinish={onFinish} labelAlign="top">
                <Form.Item
                  label="Name of Todo Item"
                  name="name"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Name of Todo Item",
                    },
                  ]}
                >
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                  label="Description"
                  labelCol={{ span: 24 }}
                  name="description"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Description",
                    },
                  ]}
                >
                  <Input placeholder="Description" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Create
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AddTodo;
