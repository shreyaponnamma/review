import React from "react";

import "./styles.css";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      rating: "",
      title: "",
      review: ""
    };
  }

 
  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };


  onEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  };


  onRatingChange = (e) => {
    this.setState({
      rating: e.target.value
    });
  };

  
  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };


  onReviewChange = (e) => {
    this.setState({
      review: e.target.value
    });
  };

  onSubmit = () => {
    const data = `
    Name: ${this.state.name},
    Email: ${this.state.email},
    Rating: ${this.state.rating},
    Title: ${this.state.title},
    Review: ${this.state.review},
    `;

    window.alert(data);
    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      name: "",
      email: "",
      rating: "",
      title: "",
      review: ""
    });
  };

  render = () => {
    return (
      <div className="container">
        <div className="form-container">
          <input
            onChange={this.onNameChange}
            value={this.state.name}
            type="text"
            placeholder="Enter name"
          />
          <input
            onChange={this.onEmailChange}
            value={this.state.email}
            type="email"
            placeholder="Enter Email"
          />
          <input
            onChange={this.onRatingChange}
            value={this.state.rating}
            type="text"
            placeholder="Enter rating"
          />

          <input onChange={this.onTitleChange} 
          value={this.state.title}
            type="text"
            placeholder="Enter title"
            />
          

          <input
            onChange={this.onReviewChange}
            value={this.state.review}
            type="text"
            placeholder="Enter review"
          />

          <button onClick={this.onSubmit} className="submit-btn">
            Submit
          </button>
        </div>
      </div>
    );
  };
}

export default Forms;