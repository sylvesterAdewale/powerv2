import Head from 'next/head'

const Meta = ({ title, keywords, desc }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
      <meta name="theme-color" content="#FFFFFF"/>
      <meta name="description" content={desc}/>
      <meta name="keywords" content={keywords}/>
      <link rel="icon" href="/assets/power-head2.png" type="image/png" />

     <meta property="og:type" content="website"/>
     <meta property="og:url" content="https://www.thepowernft.com/"/>
     <meta property="og:title" content={title}/>
     <meta property="og:description" content={desc}/>
     <meta property="og:image" content="/assets/power-head2.png"/>

     <meta property="twitter:card" content="summary_large_image"/>
     <meta property="twitter:url" content="https://www.twitter.com/powerNFT_"/>
     <meta property="twitter:title" content={title}/>
     <meta property="twitter:description" content={desc}/>
     <meta property="twitter:image" content="/assets/power-head2.png"/>

     <meta property="og:site_name" content="Frikax"/>
     <meta property="og:site" content="https://www.thepowernft.com/"/>
     <meta property="og:title" content={title}/>
     <meta property="og:description" content={desc}/>
     <meta property="og:image" content=""/>
     <meta property="og:url" content="/assets/power-head2.png" />
     <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title : "Power - Illustrating the achievement of past and present leaders.",
  keywords : "nft, power nft, trending nft, new nft, best nft, power, vintage nft, nft metaverse, nft images, new nft, nft drops, nft opensea, nft digital art, nft digital art, nft explained, nft gallery, nft meaning, nft marketplace, nft art, nft crypto",
  desc : "PowerNFT is a project that depicts the historical achievements of leaders both past and present who have impacted the world on different levels and in every aspect. This project is solely focused on 25 great icons of different cultural backgrounds ,nationalities and race. Who have made history in the world of today and had the capacity or ability to direct or influence the behaviour of people or the course of events through out history. Power NFT has thus therefore embarked on a journey to preserve the history of this great ICONS."
}

export default Meta