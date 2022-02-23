import React from "react";

function Card(props) {
  return (
    <>
      <div
        className="name"
        onClick={() => {
          props.onpress({
            name: props.name,
            age: props.age,
            city:props.city,
            img: props.img,
          });
        }}
        style={{
          border: "3px solid black",
          marginBottom:"2px",
          width:"150px",
          height:"30px"
        }}
      >
        <div style={{fontWeight:"bold"}}>
            <p>{props.ind + 1}-{props.name}</p>
          
        </div>

        {/* </div> */}
      </div>

    </>
  );
}

export default Card;
