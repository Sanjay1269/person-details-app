import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import { details } from "./components/Sdata";
import Display from "./components/Display";

function App() {
  const [data, setdata] = useState({});
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }} className="App">

      <div style={{}}>
        {details.map((val, ind) => {
          return (
            <Card
              key={ind}
              name={val.name}
              age={val.age}
              img={val.img}
              city={val.city}
              ind={ind}
              onpress={(data) => {
                console.log(data)
                setdata({ name: data.name, age: data.age, img: data.img, city: data.city });
              }} />
          );
        })}
      </div>
      {data.name ?
        <Display displays={data} /> : null}
    </div>
  );
}

export default App;
