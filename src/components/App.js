import React from 'react'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'
//import axios from 'axios' 

class App extends React.Component{
    state = {images : []};

     onSaveForm = async (term) => {
        //console.log(event);
        const response = await unsplash.get('/search/photos',{
        params : {query : term}        
        });        
        this.setState({images : response.data.results})      

    }

    render(){
        return <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSave={this.onSaveForm}></SearchBar>
            <ImageList images={this.state.images}></ImageList>
        </div>
    }
}

export default App;