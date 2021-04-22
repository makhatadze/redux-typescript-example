import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteTodo, fetchTodos, Todo} from "../actions";
import {StoreState} from "../reducers";

interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}

interface AppState {
    fetching: boolean
}


export class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {fetching: false}
    }

    componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<AppState>, snapshot?: void) {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({fetching: false})
        }
    }

    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({fetching: true})
    };

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => (
            <div key={todo.id}>
                {todo.title}
            </div>
        ))
    }

    render() {
        return <h1>
            <button onClick={this.onButtonClick}>Fetch</button>
            {this.state.fetching && 'LOADING'}
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
        fetchTodos,
        deleteTodo
    }
)(App);