import { StarOutlined } from "@ant-design/icons";

const StarsIcons = ({ stars }) => {
  return (
    <>
      {stars.map((el,index) => (
        <StarOutlined key={index} />
      ))}
    </>
  );
};

export default StarsIcons;
