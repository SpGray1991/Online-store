import { Card, Col, Image } from "react-bootstrap";
import { IDevice } from "../../types/DeviceType";
import star from "../../assets/star.png";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../utils/consts";
import "./DeviceItem.css";

const DeviceItem = ({ id, name, price, rating, img }: IDevice) => {
  const navigate = useNavigate();
  return (
    <Col
      md={3}
      className={"mt-4"}
      onClick={() => navigate(DEVICE_ROUTE + "/" + id)}
    >
      <Card style={{ cursor: "pointer" }} border={"light"}>
        <Image className="image" src={process.env.REACT_APP_API_URL + img} />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>Product</div>
          <div className="d-flex align-items-center">
            <div>{rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
