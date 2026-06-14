import React from 'react'

function About(props) {
  return (
    <div className="card" style={props.style}>
    <div className="card-body">
    <h5 className="card-title">TextUtils</h5>
    <p className="card-text">TextUtils is a simple and powerful text manipulation tool designed to make working with text faster and easier. Whether you need to convert text to uppercase, lowercase, remove extra spaces, copy text instantly, count words and characters, or perform other text transformations, TextUtils provides all the essential tools in one place.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
</div>
  )
}

export default About
