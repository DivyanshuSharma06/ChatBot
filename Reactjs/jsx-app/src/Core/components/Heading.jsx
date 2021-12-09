// import React from "react";
// // import ReactDOM from "react-dom";

// function Heading() {
//   return <h1>Hello World!</h1>;
// }

// export default Heading;
// import ReactDOM from "react-dom";
import React from "react";

function Heading() {
  const hrs = new Date().getHours();

  const customStyle = {
    color: "",
  };
  let greeting;

  if (hrs < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (hrs < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}
export default Heading;
