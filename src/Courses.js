import React, { Component } from 'react';

class Courses extends Component {
  state = {
    courses: [],
  };
  componentDidMount() {
    fetch('/course', {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` },
    })
      .then((response) => {
        console.log('this is resposne');
        console.log(response);
        if (response.ok) return response.json();
        throw new Error('Network Connection Error');
      })
      .then((response) => this.setState({ courses: response.courses }))
      .catch((err) => this.setState({ message: err.message }));
  }

  render() {
    return (
      <ul>
        {this.state.courses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    );
  }
}

export default Courses;
