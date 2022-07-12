import PowerMap from '@components/PowerMap'
import { RoadMap } from '@components/Roadmap'
import Layout from '@layouts/Layout'
import Image from 'next/image'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Powermap = () => {
  const [mapModal, setMapModal] = useState(null)

  return (
    <Layout className="mt-20">
      <section className="font-medium">
          <div className="">
              <div className="flex items-center gap-4">
                  <div>
                      <h1 className="text-xl md:text-4xl trispace uppercase font-bold">Power Map</h1>
                      <p className="text-xs md:text-base capitalize">Scroll through the power arts</p>
                  </div>
              </div>
          </div>
          <p className="mt-5 max-w-3xl">We are committed to making a distinctive change and to harness superior thinking in the creation of every NFT and visually enhance the spaces in which people live whilst reducing our carbon footprint.</p>
          <div className="relative h-full overflow-hidden my-10">
            <div className="flex flex-wrap justify-start -mx-2 relative">
              {RoadMap.map((item, id) => (
                <PowerMap key={item.id} item={item} id={id} setMapModal={setMapModal} />
              ))}
            </div>
              {mapModal && (
                <motion.div
                initial={{
                  width: '100px',
                  height: '100px'
                }}
                animate={{
                  width: '100%',
                  height: '100%',
                }}
                className={`w-full h-full top-0 left-0 transform ease-in-out duration-500 absolute transition-all cursor-pointer`}> 
                <div className="p-4 lg:p-10 relative h-full w-full bg-orange-100">
                  <div className="p-2" onClick={() => setMapModal(null)}><FiX /></div>
                  <h1 className="text-3xl lg:text-6xl font-bold trispace uppercase text-orange-300">{mapModal.id}</h1>
                  <h2 className="text-lg w-[82%] md:text-xl font-medium">{mapModal.title}</h2>
                  <motion.ul initial={{opacity:'0'}} animate={{opacity:'1'}} transition={{delay:'1000ms'}} className="w-[82%] px-4 py-5 mt-2">
                      {mapModal.desc && mapModal.desc.map((des, id) => (
                          <li key={id} className="list-outside list-disc box-content">{des}</li>
                      ) )}
                  </motion.ul>
                  <div className="absolute bottom-3 right-5 flex items-start">
                    <div className="w-28 h-28 md:w-48 md:h-48">
                      {mapModal.img && <Image src={mapModal.img} alt={mapModal.title} layout="fill" objectFit="contain" />}
                    </div>
                  </div>
                </div>
            </motion.div>
              )}
          </div>
          <div className="flex sm:items-center justify-between gap-2 my-20">
            <p className="text-xs">The Power NFT, Copyright 2022</p>
          </div>
      </section>
    </Layout>
  )
}

export default Powermap