import React from 'react'
import Head from 'next/head'

const seoConstants = {
  name: 'Simon Peter',
  title: 'Meet Simon The Creative',
  description: 'Meet Simon Peter, a Frontend React and Nextjs Developer! explore my portfolio and contact me if you have any discussions!😀'
}

const SeoHeaders = () => {
  return (
    <Head>
    <title>Simon Peter</title>
    <meta name="description" content={seoConstants.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/impossible.png" />


    {/* Facebook */}
    <meta property='og:type' content='website' />
    <meta property='og:title' content={seoConstants.title}/>
    <meta property='og:image' content='/impossible.png'/>
    <link rel="cannonical" href="https://simon-peter-liard.vercel.app" />
    <meta property='og:description' content={seoConstants.description}/>
    <meta property='og:type' content='website'/>
    <meta property='og:url' content='https://simon-peter-liard.vercel.app'/>

    {/* Twitter  */}
    <meta property='twitter:creator' content={seoConstants.name} />
    <meta property='twitter:card' content='website'/>
    <meta property='twitter:type' content='website' />
    <meta property='twitter:title' content={seoConstants.title}/>
    <meta property='twitter:url' content='https://simon-peter-liard.vercel.app'/>
    <meta property='twitter:image' content='/impossible.png'/>
    <meta property='twitter:description' content={seoConstants.description}/>
  </Head>
  )
}

export default SeoHeaders