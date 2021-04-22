import React, {Component} from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    color?: string;
}

const App = (props: AppProps): JSX.Element => {
    return (
        <h1>{props.color}</h1>
    )
};


ReactDOM.render(
    <React.StrictMode>
        <App color={'green'}/>
    </React.StrictMode>,
    document.getElementById('root')
);

