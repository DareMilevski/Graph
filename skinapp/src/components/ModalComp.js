import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Form, Input, Button, Modal, Select } from "antd";
import "../modal.css";
import { Category, AllData, AddService } from "../query/query";

const ModalComp = () => {
  const [allData, setAllData] = useState({
    masterCategoryId: "",
    categoryId: "",
    name: "",
    price: "",
    review: "",
    rating: "",
    time: "",
  });
  const [visible, setVisible] = useState(false);
  const { data } = useQuery(AllData);

  const { data: filterCategory } = useQuery(Category, {
    variables: { category: allData.masterCategoryId },
  });

  const [addService, { loading, error }] = useMutation(AddService);
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  const onFinish = (e) => {
    console.log(e, "va");
    console.log(allData);
    addService({
      variables: {
        category_id: parseInt(allData.categoryId),
        name: allData.name,
        price: parseInt(allData.price),
        review: parseInt(allData.review),
        rating: parseInt(allData.rating),
        time: parseInt(allData.time),
      },
    });
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
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
          onFinish={onFinish}
        >
          <Form.Item label="Master Category">
            <Select
              placeholder="Choose master category"
              onChange={(e) => setAllData({ ...allData, masterCategoryId: e })}
            >
              {data &&
                data.data_master_categories.map((category) => (
                  <Select.Option key={category.id} value={category.id}>
                    {category.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item label="Category">
            <Select
              placeholder="Choose category"
              onChange={(e) => setAllData({ ...allData, categoryId: e })}
            >
              {filterCategory &&
                filterCategory.data_categories.map((category) => (
                  <Select.Option key={category.id} value={category.id}>
                    {category.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>

          <Form.Item label="New Name">
            <Input
              type="text"
              placeholder="Insert name"
              onChange={(e) => setAllData({ ...allData, name: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="New Price">
            <Input
              type="number"
              placeholder="Insert price"
              onChange={(e) =>
                setAllData({ ...allData, price: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="New Review">
            <Input
              type="number"
              placeholder="Insert review"
              onChange={(e) =>
                setAllData({ ...allData, review: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="New Rating">
            <Input
              type="number"
              placeholder="Insert rating"
              onChange={(e) =>
                setAllData({ ...allData, rating: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="New Time">
            <Input
              type="number"
              placeholder="Insert time"
              onChange={(e) => setAllData({ ...allData, time: e.target.value })}
            />
          </Form.Item>



        </Form>
      </Modal>
    </div>
  );
};

export default ModalComp;
