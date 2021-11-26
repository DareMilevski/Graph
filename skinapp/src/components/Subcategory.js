import { MedicineBoxOutlined, LaptopOutlined } from "@ant-design/icons";

const Subcategory = ({ items, setItems }) => {
  const filterList = (onlyOnline) => {
    setItems(
      items &&
        items.filter((item) => {
          if (onlyOnline && !item.online) {
            return false;
          }
          return true;
        })
    );
  };
  return (
    <div className="showSubcategory">
      <div
        className="showSubcategoryInner"
        onClick={() => {
          filterList(false);
        }}
      >
        <MedicineBoxOutlined />
        <div>In clinic</div>
      </div>
      <div
        className="showSubcategoryInner"
        onClick={() => {
          filterList(true);
        }}
      >
        <LaptopOutlined />
        <div>Virtual Consultation</div>
      </div>
    </div>
  );
};

export default Subcategory;
