import Layout from '@layouts/Layout'
import React from 'react'

const Dictum = () => {
  return (
    <Layout className="mt-20">
      <div className="my-6">
        <h1 className="text-2xl lg:text-4xl uppercase trispace font-bold">Dictum</h1>
        <p className="font-bold">What is Power to you?</p>
      </div>
      <div className="flex flex-col gap-4 font-medium text-sm md:text-lg">
        <p>From ancient France to India to Ghana to New Zealand From fashion to music to politics to biology Icons have taught us and showed us to dream They have inspired us to dare to create the world we want.</p>
        <p>From generations to generations Through evolutionary discoveries, revolutions, leadership, entertainment, art, Icons have displayed how much power humans wield.</p>
        <p>Magazine covers, boxing rings, government roundtables, center stages, famous masterpieces They depict how much power exists How do we create power? How do we mould power? How do we hold power?</p>
        <p>With paintbrushes to make pictures? With voices to make music? With wisdom to protect our nations? Or with the internet to generate opportunities, produce value and build wealth.</p>
      </div>
      <div className="flex sm:items-center justify-between gap-2 my-20">
        <p className="text-xs">The Power NFT, Copyright 2022</p>
      </div>
    </Layout>
  )
}

export default Dictum