import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceApi";
import { IDevice, Info2 } from "../types/DeviceType";

const DevicePage = () => {
  const [device, setDevice] = useState<any>({ info: [] });

  const { id } = useParams();

  useEffect(() => {
    console.log("RES");
    fetchOneDevice(id).then((data: IDevice[]) => setDevice(data));
  }, []);

  const arr = device.info;
  console.log("TESTSST", arr);

  return (
    <Container className="mt-3">
      <div className="row">
        <Col md={3}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col md={3}>
          <div className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </div>
        </Col>
        <Col md={3}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {device.price} грн.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </div>
      <div className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {arr.map((i: Info2, index: number) => (
          <div
            className="row d-flex "
            key={i.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {i.title}: {i.description}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DevicePage;
