import React from "react"
const Home = (props) => {
    return (
        <>

            {
                props.allPosts.map((post) => (
                    <p key={post.post_id} className="post"> * {post.post_content}</p>
                ))
            }

        </>
    )
}

export default Home