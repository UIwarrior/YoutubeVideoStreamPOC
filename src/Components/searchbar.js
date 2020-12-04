import React from 'react';
import Form from 'react-bootstrap/Form'

class SearchBar extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.getSearchData = this.getSearchData.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

   getSearchData(e){
       this.setState({
           searchTerm : e.target.value 
       })
   } 

   onFormSubmit(e){
       e.preventDefault();
       this.props.onFormSubmit(this.state.searchTerm);
   }

   render(){
       const { searchTerm } = this.state;
       return (
        <div>
         <Form onSubmit = {this.onFormSubmit}>
           <Form.Group controlId="">
             <Form.Label>Video Search</Form.Label>
             <Form.Control 
             onChange = {this.getSearchData}
             type="text" value = {searchTerm} 
             placeholder="Enter Search Term" />
           </Form.Group>
         </Form>
         </div>
       )
   }
}

export default SearchBar;
