import Subcategory from "./Subcategory";
import { ClockCircleOutlined } from "@ant-design/icons";
import StarsIcons from "./StarsIcons";

const ShowDetailsList = ({ items, setItems }) => {
  return (
    <div className="detail">
      <Subcategory items={items} setItems={setItems} />
      {items &&
        items.map((el, i) => (
          <div className="detailInner" key={i}>
            <div className="detailContainer">
              <div className="menu-items-detail">
                <span className="subtitle">{el.name}</span>
                <span className="subprice">$ {el.price}</span>
              </div>
              <div className="detailContainerSub">
                <span>
                  {el.time} min <ClockCircleOutlined />{" "}
                </span>
                <span className="service-number">{el.key} services</span>
              </div>
              <div className="detailContainerBottom">
                <div>
                  <span>
                    <StarsIcons stars={items} />
                  </span>
                  <span className="reviewStar">{el.review} reviews</span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShowDetailsList;
