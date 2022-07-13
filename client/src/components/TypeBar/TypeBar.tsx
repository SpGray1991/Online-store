import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const TypeBar = () => {
  const { devices, types, brands, selectedType, selectedBrand } =
    useTypedSelector((state) => state.device);

  const { setSelectedType } = useActions();

  return (
    <ListGroup>
      {types.map((type) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={type.id === selectedType.id}
          onClick={() => setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TypeBar;
