import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar/TypeBar";
import BrandBar from "../components/BrandBar/BrandBar";
import DeviceList from "../components/DeviceList/DeviceList";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import Pages from "../components/Pages";

const Shop = () => {
  const {
    devices,
    types,
    brands,
    selectedType,
    selectedBrand,
    page,
    limit,
    totalCount,
  } = useTypedSelector((state) => state.device);

  const { setTypes, setBrands, setDevices, setLimit, setPage, setTotalCount } =
    useActions();

  useEffect(() => {
    setTypes();
    setBrands();
  }, []);

  useEffect(() => {
    setDevices(selectedType.id, selectedBrand.id, page, 3);
  }, [page, selectedType, selectedBrand]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
