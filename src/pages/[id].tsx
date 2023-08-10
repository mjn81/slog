import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'

const Article = () => {
  const { id } = useRouter().query;
  return (
    <>
      <Head>
        <title>
          Slog | {id}
        </title>
      </Head>
      <section className='w-full'>
        
      </section>
    </>
  )
}

export default Article