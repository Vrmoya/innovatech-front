import React from 'react'
import style from './Order.module.css'

const Order = () => {
  return (
    <div>
      <nav>
        <h5>Sort by</h5>
        <ul>
          <li><p href="/search">Relevance</p></li>

          <li><a href="/search?sort=trending-desc">Trending</a></li>

          <li><a>Latest arrivals</a></li>

          <li><a>Price: Low to high</a></li>

          <li><a>Price: High to low</a></li>
        </ul>
      </nav>
    </div>

  )
}

export default Order;