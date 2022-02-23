import React, { useState } from "react";

function Display(props) {
  const { displays } = props;
  return (
    <div style={{textAlign:"center", height: "700px", marginTop: "10px", marginRight: "400px", width: "600px", border:"2px solid black"}}>

      <h1><u>PERSON DETAILS</u></h1>
      <br/>
      <img height="400px" width="300px" src={displays.img} />
      <h1>NAME :{displays.name}</h1>
      <h1>AGE  :{displays.age}</h1>
      <h1>CITY :{displays.city}</h1>
    </div>
  );
}

export default Display;
