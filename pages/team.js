import Layout from '@layouts/Layout'
import Image from 'next/image'

const Team = () => {
  return (
    <Layout>
      <section>
            <p>Our Team</p>
            <p>The people behind the scenes.</p>
            <div className="container-teams">
            <div className="">
              <div className="w-52 h-52 relative">
                <Image src="/assets/elijah.png" alt="mr-t image" layout="fill" objectFit="contain" />
              </div>
                <div>
                <p>Mr T </p>
                <p>Founder </p>
                </div> 
            </div>
            <div>
                <img src="/assets/pops.png" alt="pops image" />
                <div>
                <p>Pops</p>
                <p>Co-founder</p>
                </div>
            </div>
            <div>
                <img src="/assets/tktkun.png" alt="tk-kun image" />
                <div>
                <p>Tk kun</p>
                <p>	Project manager</p>
                </div>
            </div>
            <div>
                <img src="/assets/nikama.png" alt="nakama image" />
                <div>
                <p>Nakama </p>
                <p>	Project advisor </p>
                </div>
            </div>
            </div>
        </section>
    </Layout>
  )
}

export default Team