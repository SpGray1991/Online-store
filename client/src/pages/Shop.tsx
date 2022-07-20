import { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import TypeBar from "../components/TypeBar/TypeBar";
import BrandBar from "../components/BrandBar/BrandBar";
import DeviceList from "../components/DeviceList/DeviceList";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import Pages from "../components/Pages";

const Shop = () => {
  const { selectedType, selectedBrand, page } = useTypedSelector(
    (state) => state.device
  );

  const { setTypes, setBrands, setDevices } = useActions();

  useEffect(() => {
    setTypes();
    setBrands();
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
