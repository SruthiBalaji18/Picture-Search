import React from 'react'

class SearchBar extends React.Component {

    state = { term: '' };
    
    onForSubmit= e => {
        e.preventDefault(); // stores the value event after page refreshes
        this.props.onSave(this.state.term);
    }

    onValueChange = e=>{
        this.setState({term: e.target.value});
    }
    
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onForSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            value={this.state.term} 
                            onChange={this.onValueChange}>
                        </input>
                    </div>
                </form>

            </div>
        );
    }
};

export default SearchBar;