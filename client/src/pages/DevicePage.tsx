import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceApi";
import { IDevice } from "../types/DeviceType";

const DevicePage = () => {
  /* const { devices, types, brands, selectedType, selectedBrand } =
    useTypedSelector((state) => state.device); */

  const description = [
    { id: 1, title: "Оперативная память", description: "5 gb" },
    { id: 2, title: "Камера", description: "12 gb" },
    { id: 3, title: "Процессор", description: "Пентиум 3" },
    { id: 4, title: "Кол-во ядер", description: "2" },
    { id: 5, title: "Аккумулятор", description: "4000" },
  ];

  /*   const { id, name, price, rating, img } = devices; */

  const [device, setDevice] = useState<any>([]);
  const { id } = useParams();
  useEffect(() => {
    fetchOneDevice(id).then((data: IDevice[]) => setDevice(data));
  }, []);

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
        {description.map((info, index) => (
          <div
            className="row d-flex "
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DevicePage;
