import React from 'react'
import useGeolocation from 'react-hook-geolocation'

 export default function ComponentWithGeolocation () {
    const geolocation = useGeolocation()
  
    return !geolocation.error
      ? (
        <ul>
          <li>Latitude:          {geolocation.latitude}</li>
          <li>Longitude:         {geolocation.longitude}</li>
          
        </ul>
      )
      : (
        <p>No geolocation, sorry.</p>
      )
  }