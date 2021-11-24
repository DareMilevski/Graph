import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Form, Input, Button, Modal, Select } from "antd";
import "../modal.css";
import { Category, AllData, AddService } from "../query/query";
import gql from "graphql-tag";
import { dataInput } from "./dataInput";

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
  console.log(allData);
  const { data: filterCategory } = useQuery(Category, {
    variables: { category: allData.masterCategoryId },
  });

  const [addService, { loading, error }] = useMutation(AddService, {
    update(cache, { data: { addService } }) {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            const newTodoRef = cache.writeFragment({
              data: addService,
              fragment: gql`
                fragment NewSe on AddService {
                  category_id
                  name
                  price
                  rating
                  review
                  time
                }
              `,
            });
            return [...existingTodos, newTodoRef];
          },
        },
      });
    },
  });

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  const onFinish = () => {
    addService({
      variables: {
        category_id: parseInt(allData.categoryId),
        name: allData.name,
        price: parseInt(allData.price),
        review: parseInt(allData.review),
        rating: parseInt(allData.rating),
        time: parseInt(allData.time),
      },
      refetchQueries: [{ query: AllData }],
      update(cache, result) {
        ///
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
          {dataInput.map((el, index) => (
            <Form.Item key={index} label={el.label}>
              <Input
                type={el.type}
                name={el.name}
                placeholder={el.placeholder}
                onChange={(e) =>
                  setAllData({ ...allData, [e.target.name]: e.target.value })
                }
              />
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </div>
  );
};

export default ModalComp;
