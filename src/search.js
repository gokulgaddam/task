import React, { Component } from 'react';
import {Input } from 'reactstrap';
import PropTypes from 'prop-types';
//import options from './options.json';
export class Search extends Component {
    static propTypes = {
        options: PropTypes.instanceOf(Array).isRequired
      };
    state={
        showOptions: false,
        filteredOptions:[],
        
        userInput:''
    };
 

    onChange = (e) => {
      const { options } = this.props;
      const userInput = e.currentTarget.value;
      console.log(userInput);
  const filteredOptions = options.filter(
        (option) => option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
  this.setState({
        
        filteredOptions:filteredOptions,
        showOptions: true,
        userInput
      });
    };

    onClick = (e) => {
      this.setState({
        activeOption: 0,
        filteredOption: [],
        showOptions: false,
        userInput: e.currentTarget.innerText
      });
    };

  
  render() {
    let optionList;
    if (this.state.showOptions && this.state.userInput) {
      if (this.state.filteredOptions.length) {
        optionList = (
          <ul className="options">
            {this.state.filteredOptions.map((optionName, index) => {
              let className;
              if (index === this.state.activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={optionName} onClick={this.onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }
     // console.log(JSON.stringify(options));
    return (
      <React.Fragment>
        <div className="search mt-5">
        <Input
          id='search'
          placeholder='Enter your name'
          type="text"
           onChange={this.onChange} 
          
           value={this.state.userInput} 

        />
        {optionList}
          <input type="submit" value="search" className="search-btn mt-3 btn btn-primary" />

        </div>
      </React.Fragment>
    );
  }
}
export default Search;