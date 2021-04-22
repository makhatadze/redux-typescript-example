import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchTodos, Todo} from "../actions";
import {StoreState} from "../reducers";

interface AppProps {
    todos: Todo[];
    fetchTodos(): any
}


export class App extends Component<AppProps> {
    onButtonClick =  (): void => {
        this.props.fetchTodos();
    };

    renderList(): JSX.Element[] {
        return  this.props.todos.map((todo: Todo) => (
            <div key={todo.id}>
                {todo.title}
            </div>
        ))
    }
    render() {
        return <h1>
            <button onClick={this.onButtonClick}>Fetch</button>
            {this.renderList()}
        </h1>;
    }
}

const mapStateToProps = ({todos}: StoreState): { todos: Todo[] } => {
    return {todos}
}

export default connect(
    mapStateToProps,
    {
        fetchTodos
    }
)(App);