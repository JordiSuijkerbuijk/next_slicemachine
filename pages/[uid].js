// pages/[uid].js

import { createClient } from '../prismicio'
import TestSection from '../slices/TestSection/index';
import ImageSection from '../slices/Image/index'
import dlv from 'dlv';

const sections = {
  test_section: TestSection,
  image: ImageSection
}

export default function Homepage({ page }) {
  const slices = dlv(page, 'data.slices', []);

  return (
    <div className='section'>
      {slices.map((item, index) => {
        const Yeet = sections[item.slice_type];
        return(
          <div key={index}>
            <Yeet slice={item} />
          </div>
        )
      })}
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: ['/test'], fallback: false
  }
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', params.uid)

  return {
    props: { page },
  }
}