import React from "react"
const Home = ({ allPosts }) => {
    return (
        <>

            {
                allPosts.map((post) => (
                    <div className='indivPostDiv' key={post.post_id} id={post.user_id}>
                        <p className='postUsername'>@{post.user_name}</p>
                        <p className="post"> * {post.post_content}</p>
                    </div>
                ))
            }

        </>
    )
}

export default Home