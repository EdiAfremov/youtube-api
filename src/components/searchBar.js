import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ''
        }
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
        this.props.onSearchTermChange(event.target.value)
    }

    render() {
        return (
            <div>
                <input
                    className="search-bar"
                    value={ this.state.term }
                    onChange={ this.onInputChange }
                    placeholder='Search'
                />

            </div>
        );
    }
}

export default SearchBar;



