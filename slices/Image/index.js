import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Image = ({ slice }) => (
  <section>
    {console.log('slice', slice.primary.Image)}
    <span className="image">
      {
        slice.primary.Image && slice.primary.Image.url &&
        <img src={slice.primary.Image.url} {...slice.primary.Image}/>
      }
    </span>
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
    `}</style>
  </section>
)

export default Image