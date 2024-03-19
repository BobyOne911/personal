import React from 'react'
import Article_single from './Article_single'

function Articles() {
  return (
    <section className='my-5'>
        <h2 className='font-bold text-lg text-center my-7'>Lately</h2>
        <div className='w-full flex mx-auto flex-col md:flex-row md:gap-10 md:max-w-7xl'>
            <Article_single />
            <Article_single />
            <Article_single />
        </div>
    </section>
  )
}

export default Articles