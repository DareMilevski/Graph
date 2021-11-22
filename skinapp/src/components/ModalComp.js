import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Form, Input, Button, Modal, Select } from "antd";
import "../modal.css";
import { AddService, AllData, Category, subCategory } from "../query/query";
import { useForm } from "rc-field-form";

const ModalComp = ({ originalData }) => {
  const [visible, setVisible] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState();

  const { data } = useQuery(subCategory);

  const onFinish = (e) => {
    console.log(e);
  };

  const showModal = () => {
    console.log("open");
    setVisible(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <div className="modal">
      <Button type="primary" onClick={showModal}>
        Add Service
      </Button>
      <Modal
        title="Select option"
        visible={visible}
        onCancel={handleCancel}
        onOk={onFinish}
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item label="Master Category">
            <Select placeholder="Choose master category">
              {originalData &&
                originalData.map((category) => (
                  <Select.Option value={category.id}>
                    {category.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item label="Category">
            <Select placeholder="Choose category">
              {data &&
                data.map((category) => (
                  <Select.Option value={category.id}>
                    {category.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item label="New Service">
            <Input placeholder="Insert name of service" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalComp;
