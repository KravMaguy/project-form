import { useState, useEffect } from "react";
import cardata from "./cardata";


// https://assets.codepen.io/19636/deere-challenge.jpg
// https://codepen.io/kravmaguy/project/editor/DQQygx

const CarsList = () => {
  const [carsData, setCarData] = useState(cardata);
  const [checkMazda, setcheckMazda] = useState(true);
  const [checkSubaru, setCheckSubaru] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedModels, setSelectedModels] = useState(["Mazda"]);

  const handleSelectMazda = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setcheckMazda(!checkMazda);
    if (selectedModels.includes(value)) {
      const arr = selectedModels.filter((x) => x !== value);
      setSelectedModels(arr);
    } else {
      setSelectedModels([...selectedModels, value]);
    }
  };

  const handleSelectSubaru = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setCheckSubaru(!checkSubaru);
    if (selectedModels.includes(value)) {
      const arr = selectedModels.filter((x) => x !== value);
      setSelectedModels(arr);
    } else {
      setSelectedModels([...selectedModels, value]);
    }
  };

  const selectCar = (id) => {
    console.log(id);
    setSelectedCar(id);
  };

  // useEffect(() => {
  //   console.log(cardata, "carData");
  // }, []);

  console.log(selectedModels, "selectedModels");
  const displayedCars = carsData.filter((car) =>
    selectedModels.includes(car.make)
  );
  console.log(displayedCars, "displayedCars");

  return (
    <div className="border-2 border-gray-700 p-3">
      <div className="row g-4">
        <div className="col-md-3">
          <div className="border-2 border-gray-700 p-3">
            <h3 className="text-xl">Filters</h3>
            <label>
              <input
                type="checkbox"
                checked={checkMazda}
                onChange={(e) => handleSelectMazda(e)}
                value={"Mazda"}
              />
              Mazda
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkSubaru}
                onChange={(e) => handleSelectSubaru(e)}
                value={"Subaru"}
              />
              Subaru
            </label>
          </div>
        </div>

        <div className="col-md-4">
          {displayedCars.map((car, idx) => (
            <div
              key={idx}
              onClick={() => selectCar(idx)}
              className="border-2 border-gray-700 p-3"
            >
              {car.year} {car.make} {car.model}
            </div>
          ))}
        </div>

        <div className="col-md-5">
          <div className="border-2 border-gray-700 p-3">
            {!selectedCar && selectedCar !== 0 ? (
              <div>Select a car to display details</div>
            ) : (
              <div>({carsData[selectedCar].year}) {carsData[selectedCar].make}, {carsData[selectedCar].model}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsList;
