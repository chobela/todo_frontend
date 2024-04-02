import { Button, Typography, Row, Col, Card, Table, Avatar, Space } from "antd";
import {
  FileAddOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { userContext } from "../context/userContext";
import axios from "axios";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const { Title } = Typography;
  const history = useHistory();
  const { user } = useContext(userContext);

  const handleViewRecord = (todo) => {
    // Navigate to another component and pass the record data
    history.push("/editTodo", { todo });
  };

  const handleDelete = (todo) => {
    axios
      .delete(`http://localhost:8080/api/v1/items/${todo.id}`)
      .then((res) => {
        const newTodos = todos.filter((item) => item.id !== todo.id);
        setTodos(newTodos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    {
      title: "Name of Todo Item",
      dataIndex: "name",
      key: "name",
      render: (name, record) => (
        <>
          <div className="author-info">
            <h6 level={5}>{name}</h6>
          </div>
        </>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description, record) => (
        <>
          <div className="author-info">
            <h6 level={5}>{description}</h6>
          </div>
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <>
          <Space>
            <Button
              type="primary"
              onClick={() => {
                handleViewRecord(record);
              }}
            >
              <EditOutlined />
            </Button>
            <Button
              type="danger"
              onClick={() => {
                handleDelete(record);
              }}
            >
              <DeleteOutlined />
            </Button>
          </Space>
        </>
      ),
    },
  ];

  useEffect(() => {
    //Fetch all quizzes where createdBy is equal to the current user.id
    const fetchTodos = async () => {
      axios
        .get("http://localhost:8080/api/v1/items")
        .then((res) => {
          setTodos(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchTodos();
  }, []);

  return (
    <>
      <div className="table-responsive">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Todo List"
              extra={
                <Space>
                  <Button
                    type="primary"
                    onClick={() => {
                      history.push("/addTodo");
                    }}
                  >
                    <FileAddOutlined
                      style={{ fontSize: "20px", color: "white" }}
                    />
                  </Button>
                </Space>
              }
            >
              <div className="table table-striped table-bordered">
                <Table
                  columns={columns}
                  dataSource={todos}
                  className="ant-border-space"
                  pagination={{
                    pageSize: 7,
                  }}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
