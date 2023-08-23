import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import classes from './hero.module.css'

const Hero = () => {
  const [type, setType] = useState("beach")
  const [continent, setContinent] = useState("0")
  const [priceRange, setPriceRange] = useState("0")
  const navigate = useNavigate()



  const handleSearch = () => {
    // navigating to properties
    navigate(`/properties?type=${type}&continent=${continent}&priceRange=${priceRange}`)
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Allow me to find your perfect home right away.</h2>
        <h5>Explore an extensive collection of luxury properties.</h5>
        <div className={classes.options}>
          <select onChange={(e) => setType(e.target.value)}>
            <option disabled>Select type</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="village">Village</option>
          </select>
          <select onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled>Select Price Range(in Rs.)</option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
            <option value="4">400,000-500,000</option>
          </select>
          <select onChange={(e) => setContinent(e.target.value)}>
            <option disabled>Select State</option>
            <option value="0">Maharashtra</option>
            <option value="1">Karnataka</option>
            <option value="2">Uttar Pradesh</option>
            <option value="3">Madhya Pradesh</option>
            <option value="4">Rajasthan</option>
            <option value="5">Uttarakhand</option>
          </select>
          <AiOutlineSearch className={classes.searchIcon} onClick={handleSearch} />
        </div>
      </div>
    </div>
  )
}

export default Hero