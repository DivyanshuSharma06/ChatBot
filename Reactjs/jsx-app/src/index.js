// import React from "react";
// import ReactDOM from "react-dom";
// import "../src/Core/styles.css";

// ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT)

// const customStyle ={
//   color: "red",
//   fontSize: "20px",
//   border: "1px solid black"
// }

// customStyle.color = "blue";

// ReactDOM.render(<h1 style={customStyle}>Hello World!</h1>, document.getElementById("root"));

// function Heading() {
//   return <h1>Hello World!</h1>;
// }

// ReactDOM.render(
//   <div>
//     {/* Template literal format = {'${fName} ${lName}'} */}
//     <Heading />
//     <ul>
//       <li>Pizza</li>
//       <li>Paneer</li>
//       <li>Maggi</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";

// const yourName = "Divyanshu Sharma";

// ReactDOM.render(
//   <div>
//     <p>Created By {`${yourName}`}</p>
//     <p>Copyright {`${new Date().getFullYear()}`}</p>
//   </div>,
//   document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import "../src/styles.css";

// const hrs = new Date().getHours();

// const customStyle = {
//   color: ""
// };
// let greeting;

// if(hrs < 12){
//   greeting = "Good Morning";
//   customStyle.color = "red";
// } else if(hrs <18){
//   greeting = "Good Afternoon";
//   customStyle.color = "green";

// } else{
//   greeting = "Good Night";
//   customStyle.color = "blue";
// }

// ReactDOM.render(<h1 className="heading" style={customStyle}>
//   {greeting}
// </h1>, document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom";
import "../src/styles.css";
import App from "../src/Core/components/App";

ReactDOM.render(<App />, document.getElementById("root"));
