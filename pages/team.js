import Layout from '@layouts/Layout'
import Image from 'next/image'

const Team = () => {
  return (
    <Layout>
      <section className="my-16">
        <h1 className="trispace text-3xl lg:text-5xl uppercase font-black">Our Team</h1>
        <p className="font-medium max-w-[800px] mt-2">The people behind the scenes.</p>
        <div className="mt-8 flex flex-col mb-5 md:flex-row gap-5">
            <div className="bg-orange-100 md:w-1/2 p-5 flex items-center font-medium">
              <div className="w-28 h-28 relative">
                <Image src="/assets/elijah.png" alt="mr-t image" layout="fill" objectFit="contain" />
              </div>
              <div className="flex-1">
                <p className="trispace text-xl uppercase font-semibold">Mr T </p>
                <p>Founder </p>
              </div> 
            </div>
            <div className="bg-orange-100 md:w-1/2 p-5 flex items-center font-medium">
              <div className="w-28 h-28 relative">
                <Image src="/assets/tktkun.png" alt="mr-t image" layout="fill" objectFit="contain" />
              </div>
              <div className="flex-1">
                <p className="trispace text-xl uppercase font-semibold">Pops</p>
                <p>Co-founder</p>
              </div> 
            </div>
          </div>
          <div className="mb-8 flex flex-col md:flex-row gap-5">
            <div className="bg-orange-100 md:w-1/2 p-5 flex items-center font-medium">
              <div className="w-28 h-28 relative">
                <Image src="/assets/nikama.png" alt="mr-t image" layout="fill" objectFit="contain" />
              </div>
              <div className="flex-1">
                <p className="trispace text-xl uppercase font-semibold">Tk kun</p>
                <p>Project manager</p>
              </div> 
            </div>
            <div className="bg-orange-100 md:w-1/2 p-5 flex items-center font-medium">
              <div className="w-28 h-28 relative">
                <Image src="/assets/elijah.png" alt="mr-t image" layout="fill" objectFit="contain" />
              </div>
              <div className="flex-1">
                <p className="trispace text-xl uppercase font-semibold">Nakama</p>
                <p>Project advisor</p>
              </div> 
            </div>
            </div>
        </section>
    </Layout>
  )
}

export default Team