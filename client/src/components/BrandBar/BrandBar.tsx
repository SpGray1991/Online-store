import { Card } from "react-bootstrap";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import "./BrandBar.css";

const BrandBar = () => {
  const { devices, types, brands, selectedType, selectedBrand } =
    useTypedSelector((state) => state.device);

  const { setSelectedBrand } = useActions();

  return (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      {brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          key={brand.id}
          className="p-3"
          onClick={() => setSelectedBrand(brand)}
          border={brand.id === selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
};

export default BrandBar;
