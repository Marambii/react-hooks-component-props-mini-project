import React from 'react'
import Article from './Article'

function ArticleList(props) {
    const {posts} = props;
  return (
    <main>
        {posts.map(post => (
            <Article key={post.id} title={post.title} preview={post.preview} minutes={post.minutes} date={post.date}/>
        ))}
    </main>
  )
}

export default ArticleList