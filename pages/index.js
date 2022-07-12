import Layout from '@layouts/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

export default function Home() {
  return (
    <Layout className="">
      <center className="my-16">
        <h1 className="trispace text-3xl lg:text-5xl uppercase font-black">Power</h1>
        <p className="font-medium max-w-[800px] mt-2">We are committed to making a distinctive change and to harness superior thinking in the creation of every NFT and visually enhance the spaces in which people live whilst reducing our carbon footprint.</p>
        <div className="w-[300px] h-[300px] relative">
          <Image src="/assets/powerhero.png" layout="fill" objectFit="contain" alt="Group Nft Selfie" priority="true" />
        </div>
      </center>
      <div className="flex sm:items-center justify-between flex-col-reverse sm:flex-row gap-2 my-5">
        <p className="text-xs">The Power NFT, Copyright 2022</p>
        <Link href="/powermap" passHref>
          <a className="w-[200px] p-2 bg-orange-100 rounded-md">
            <div className="flex justify-between items-center bg-white rounded px-3 py-1">
              <span className="trispace uppercase font-semibold">Power</span>
              <FiArrowRight />
            </div>
          </a>
        </Link>
      </div>
    </Layout>
  )
}
