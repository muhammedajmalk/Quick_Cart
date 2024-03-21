import React from 'react'
import shop_watch from '../../Assets/shoap Page.jpeg'
import All_Product from './All_Product'

function Shop() {
  return (
    <div className=''>
      <div className='Baground'>
        <h6 className='text-center fw-light p-5 text-right'>All_Products /-</h6>
      </div>

      {/* ......Most Selects................... */}
      {/* <div>
        <div class="theme-collection-sortby-section mt-4 text-center ">
          <div class="container ">
            <div class="zprow">
              <div class="zpcol-md-12 zpcol-sm-12 theme-collection-sort">
                <div class="theme-collection-sort-inner">
                  <span class="theme-sortby-label">Sort by : </span>
                  <select data-sort-by-products="">
                    <option value="popularity" selected="">Most Popular</option>
                    <option value="new">Most Recent</option>
                    <option value="HtoL">Price: High to Low</option>
                    <option value="LtoH">Price: Low to High</option>
                    <option value="AtoZ">A to Z</option>
                    <option value="ZtoA">Z to A</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* ....Most Selection............ */}
      <div className='mt-4'>
        < All_Product />

      </div>
      {/* .................................. */}

      {/* <div className="mt-5">
        <h1 className="">All Products</h1>
        <div className="mt-5">
          <All_Product />
        </div>
      </div> */}

    </div>
  )
}

export default Shop
