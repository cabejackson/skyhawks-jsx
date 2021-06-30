//import react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}
// create a react component
const App = () => {
    return (
        <div>
            <label class="label"
                for="name">Enter Name:</label>
            <input id="name" type="text"></input>
            <button style={{ backgroundColor: 'purple', color: 'white' }}>Submit</button>
        </div >
    );
};
//take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)