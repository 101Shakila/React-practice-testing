// const element = (
//     <div title="outer div">
//         <h1>
//             Hello World! Bastard
//         </h1>
//     </div>
// );

// ReactDOM.render(element, document.getElementById("contents"));

class HelloWorld extends React.Component {
  render() {
    const continents = ['Africa', 'Asia', 'Australia', 'Europe'];
    const helloContinents = Array.from(continents, c => `Hello ${c}!`);
    const message = helloContinents.join(' ');
    return /*#__PURE__*/React.createElement("div", {
      title: "Outer div"
    }, /*#__PURE__*/React.createElement("h1", null, message));
  }
}
const element = /*#__PURE__*/React.createElement(HelloWorld, null);
ReactDOM.render(element, document.getElementById('contents'));