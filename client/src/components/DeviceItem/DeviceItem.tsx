import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { IDevice } from "../../types/DeviceType";
import star from "../../assets/star.png";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../utils/consts";

const DeviceItem = ({ id, name, price, rating, img }: IDevice) => {
  const navigate = useNavigate();
  return (
    <Col
      md={3}
      className={"mt-4"}
      onClick={() => navigate(DEVICE_ROUTE + "/" + id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + img}
        />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>Apple</div>
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
