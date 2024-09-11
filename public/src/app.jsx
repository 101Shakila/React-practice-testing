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
        return (
            <div title="Outer div">
                <h1>{message}</h1>

            </div>
        );
    }

}
const element = <HelloWorld />;
ReactDOM.render(element, document.getElementById('contents'));