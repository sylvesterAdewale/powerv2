import FaqAccordion from '@components/FaqAccordion'
import Layout from '@layouts/Layout'
import React from 'react'
import faqData from '@components/FaqData'

const Faqs = () => {
  return (
    <Layout className="mt-10">
      <div>
        <h1 className="font-bold text-2xl lg:text-4xl trispace uppercase">Faqs</h1>
        <p>You ask, we answer</p>
      </div>
      <section className="my-10">
        {faqData.map((item, id) => (
          <FaqAccordion title={item.title} content={item.content} key={id} />
        ))}
      </section>
    </Layout>
  )
}

export default Faqs