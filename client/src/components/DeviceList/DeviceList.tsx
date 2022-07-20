import { useTypedSelector } from "../../hooks/useTypedSelector";
import DeviceItem from "../DeviceItem/DeviceItem";

const DeviceList = () => {
  const { devices } = useTypedSelector((state) => state.device);

  return (
    <div className="container">
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {devices.map(({ id, name, price, rating, img, info }) => (
          <DeviceItem
            key={id}
            id={id}
            name={name}
            price={price}
            rating={rating}
            img={img}
            info={info}
          />
        ))}
      </div>
    </div>
  );
};

export default DeviceList;
