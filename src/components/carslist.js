import { useState, useEffect } from "react";
import cardata from "./cardata";

// https://assets.codepen.io/19636/deere-challenge.jpg

// use a map to add the id
// and then use reduce to find the make
// i will also not use checkedState
// I will rather add checked prop to carsdata

// cardata.map you will add an id and a checked property
// also

// cardata you will use filter or reduce to get the make

// checked boxes will be the the filltered cardata array
// [{name: "mazda", checked : true}]
// carsData = [{...car, id:1, isSelected: true},....]

const CarsList = () => {
  const [models, setModals] = useState([]);
  const [checkedState, setCheckedState] = useState([]);
  const [carsData, setCarData] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedModels, setSelectedModels] = useState(["Mazda"]);

  useEffect(() => {
    const carModals = [];
    cardata.map((car, id) => {
      car.id = id;
      car.isSelected = false;
      return carModals.includes(car.make) ? null : carModals.push(car.make);
    });
    setCarData(cardata);
    setModals(carModals);
    const checkedState = new Array(carModals.length).fill(false);
    checkedState[0] = true;
    setCheckedState(checkedState);
    console.log(carsData, "carsData");
  }, []);

  const handleChecked = (e, pos) => {
    const value = e.target.value;
    const updatedChecked = checkedState.map((item, idx) =>
      idx === pos ? !item : item
    );
    setCheckedState(updatedChecked);
    console.log(updatedChecked);
    if (selectedModels.includes(value)) {
      const arr = selectedModels.filter((x) => x !== value);
      setSelectedModels(arr);
    } else {
      setSelectedModels([...selectedModels, value]);
    }
  };

  const selectCar = (id) => {
    setSelectedCar(id);
  };

  const displayedCars = carsData.filter((car) =>
    selectedModels.includes(car.make)
  );

  return (
    <div className="border-2 border-gray-700 p-3">
      {" "}
           
      <div className="row">
        {" "}
               
        <div className="col-1">
          {" "}
                   
          <div className="border-2 border-gray-700 p-3">
            <h1 className="text-xl">Filters</h1>           
            {models.length > 0
              ? models.map((model, idx) => (
                  <label key={model}>
                    {" "}
                                       
                    <input
                      type="checkbox"
                      checked={checkedState[idx]}
                      onChange={(e) => handleChecked(e, idx)}
                      value={model}
                    />
                    {model}                 
                  </label>
                ))
              : null}{" "}
                     
          </div>{" "}
                 
        </div>
               
        <div className="col-2">
          {" "}
                   
          {displayedCars.map((car) => (
            <div
              key={car.id}
              onClick={() => selectCar(car.id)}
              className={
                car.id === selectedCar
                  ? "border-2 border-gray-700 p-3 bg-gray-600 text-white"
                  : "border-2 border-gray-700 p-3"
              }
            >
              {car.year} {car.make} {car.model}           
            </div>
          ))}{" "}
                 
        </div>{" "}
               
        <div className="col-3">
          {" "}
                   
          <div className="border-2 border-gray-700 p-3">
            {" "}
                       
            {!selectedCar && selectedCar !== 0 ? (
              <div>Select a car to display details</div>
            ) : (
              <div className="row">
                <div className="col">
                  <h2 className="text-xl">
                    ({carsData[selectedCar].year}) {carsData[selectedCar].make},
                    {carsData[selectedCar].model}
                  </h2>
                  <div>
                    make : {carsData[selectedCar].make} <br />
                    model : {carsData[selectedCar].model} <br />
                    year : {carsData[selectedCar].year} <br />
                    price : {carsData[selectedCar].price} <br />
                    location : {carsData[selectedCar].location} <br />
                  </div>
                </div>
                <div className="col">
                  <img
                    alt="placeholder"
                    className="placeholder"
                    src="./placeholder.png"
                  />
                </div>
              </div>
            )}{" "}
                     
          </div>
                 
        </div>
             
      </div>
         
    </div>
  );
};

export default CarsList;
