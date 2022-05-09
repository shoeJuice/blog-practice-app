import supabase from "../../utils/supabase";
import BlogPreview from '../../modules/blogs/components/_blogPreview';
import Head from 'next/head'

export async function getServerSideProps({params}){
    const {data: post, error} = await supabase
    .from('posts')
    .select('*')
    .eq('id', params.id)
    .single()

    if (error){
        console.log(error.message)
        return {
            redirect: {
                permanent: false,
                destination: "../404"
            }
        }
    }
    
    return {
        props: {
            post,
        }
    }
}

export default function PostPage({post}){
    return(
        <>
        <Head>
            <title>{post.title}</title>
        </Head>
        <BlogPreview title={post.title} timestamp={post.created_at} body={post.content} />
        </>
    )
}