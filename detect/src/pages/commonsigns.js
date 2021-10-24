import React, { Component } from "react";
import '../components/css/signs.css'
class signApp extends React.Component {
    constructor() {
      super();
      this.state = {
        signs: ['https://cudoo.com/blog/wp-content/uploads/2019/08/Screen-Shot-2019-08-28-at-4.32.39-PM-320x278.png','https://cudoo.com/blog/wp-content/uploads/2019/08/hotel-1-196x229.png','https://cudoo.com/blog/wp-content/uploads/2019/08/Screen-Shot-2019-08-27-at-8.44.13-PM-320x302.png','https://cudoo.com/blog/wp-content/uploads/2019/08/Screen-Shot-2019-08-27-at-9.25.55-PM-320x344.png'],
        currentPage: 1,
        signsPerPage: 2
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }

    render() {
      const { signs, currentPage, signsPerPage } = this.state;

      // Logic for displaying current signs
      const indexOfLastsign = currentPage * signsPerPage;
      const indexOfFirstsign = indexOfLastsign - signsPerPage;
      const currentsigns = signs.slice(indexOfFirstsign, indexOfLastsign);

      const rendersigns = currentsigns.map((sign, index) => {
        return (<div><img key={index} src={sign}/></div>);
      });

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(signs.length / signsPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });

      return (
        <div>
          <ul style={{color:"black"}}>
            {rendersigns}
          </ul>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
        </div>
      );
    }
  }


  export default signApp