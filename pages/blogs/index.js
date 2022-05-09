import React from 'react'
import supabase from '../../utils/supabase'
import styles from '../../styles/generics.module.css'

import BlogPreviews from '../../project/templates/BlogPreviews'
import BlogPreview from '../../modules/blogs/components/_blogPreview'

export async function getStaticProps(){
    const {data: posts, error} = await supabase.from('posts').select('*')
    
    if(error){
        throw new Error(error.message);
    }
    
    return {
        props: {
            posts,
        }
    }
}

function index({posts}) {
  return (
    <div className={styles.pageBackground}>
        
        <BlogPreviews>
           { posts.map((id, key) => {
                return <BlogPreview key={key} href={`/blogs/${id.id}`} marginX='8ex' title={id.title} timestamp={id.created_at} body={id.content} needLink /> 
            })
            }
        </BlogPreviews>
        
    </div>
  )
}

export default index