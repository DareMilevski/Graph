import Subcategory from "./Subcategory";
import { ClockCircleOutlined } from "@ant-design/icons";
import StarsIcons from "./StarsIcons";
import { Button } from "antd";
import { REMOVE_TODO, AllData } from "../query/query";
import { useMutation } from "@apollo/client";

const ShowDetailsList = ({ items, setItems }) => {
  const [deleteTodo, { loading: deleting }] = useMutation(REMOVE_TODO);

  let isPublic;

  if (isPublic) return null;

  const updateCache = (client, e) => {
    console.log(client);
    const data = client.readQuery({
      query: AllData,
      variables: {
        isPublic,
      },
    });
    const newData = {
      todos: data.todos.filter((t) => t.id !== e.id),
    };
    client.writeQuery({
      query: AllData,
      variables: {
        isPublic,
      },
      data: newData,
    });
  };

  const remove = (el, e) => {
    // console.log(el);
    if (deleting) return;
    deleteTodo({
      variables: { id: el.id },
      update: updateCache,
    });
  };

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
            <Button onClick={(e) => remove(el, e)}>Remove Category</Button>
          </div>
        ))}
    </div>
  );
};

export default ShowDetailsList;
