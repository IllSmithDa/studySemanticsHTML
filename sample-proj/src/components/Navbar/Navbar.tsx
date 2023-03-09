import React from 'react';

export default function Navbar() {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <a href="#" role="link">Daily Deals</a> 
          </li>
          <li>
            <a href="#" role="link">Brand</a> 
          </li>
          <li>
            <a href="#" role="link">Help</a> 
          </li>
          <li>
            <a href="#" role="link">Sell</a> 
          </li>
        </ul>
      </nav>
      <input aria-label="Search for Products"/>
    </section>
  )
}