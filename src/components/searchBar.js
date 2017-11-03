import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: 'Search here....'
        }
    }

    render() {
        return (
            <div className="search-bar col-md-8"> 
                <input
                    value={this.state.search}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({search: term});
        this.props.onNewSearch(term);
    }

}

export default SearchBar;