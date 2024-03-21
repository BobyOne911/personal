import React from 'react'
import Article_single from './Article_single'
import getArticles from '@/lib/action'

async function Articles() {
  const articles = await getArticles();
  const list = articles.items;
  return (
    <section className='my-5'>
        <h2 className='font-bold text-lg text-center my-7'>Lately</h2>
        <div className='w-full flex mx-auto flex-col md:flex-row md:gap-10 md:max-w-3xl flex-wrap'>
            {
                list.map((item: any) => (
                    <Article_single
                        key={item.sys.id}
                        title={item.fields.title}
                        author={item.fields.author}
                        date_publication={item.sys.createdAt}
                        image={item.fields.image.fields.file.url}
                        description={item.fields.description}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default Articles