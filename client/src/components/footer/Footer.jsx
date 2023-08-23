import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
          It is  a platform to manage rental properties, 
          including listings, tenant applications, lease agreements, 
         and maintenance requests.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: Bhopal</span>
          <span>Current Location: Bhopal</span>
        </div>
      </div>
    </footer>
  )
}
export default Footer