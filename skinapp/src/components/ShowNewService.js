import React from "react";
import { Form } from "antd";

const ShowNewService = ({ allData }) => {
  return (
    <Form>
      <Form.Item> Name : {allData.name}</Form.Item>
      <Form.Item> Price : {allData.price}</Form.Item>
      <Form.Item> Review : {allData.review}</Form.Item>
      <Form.Item> Rating : {allData.rating}</Form.Item>
      <Form.Item> Time : {allData.time}</Form.Item>
    </Form>
  );
};

export default ShowNewService;
