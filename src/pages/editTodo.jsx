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
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const EditTodo = () => {
  const location = useLocation();
  const todo = location.state.todo;
  const { Title } = Typography;
  const history = useHistory();
  console.log(todo);
  const [name, setName] = useState(todo.name);
  const [description, setDescription] = useState(todo.description);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handle description input change
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onFinish = (values) => {
    console.log(values);

    const data = {
      name: values.name,
      description: values.description,
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    };

    axios
      .patch(`http://localhost:8080/api/v1/items/${todo.id}`, data, { headers })
      .then((res) => {
        history.push("/dashboard");
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12}>
            <Card>
              <Title level={5}>Edit Todo Item</Title>
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
                  <Input
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Name"
                  />
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
                  <Input
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Description"
                  />
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

export default EditTodo;
