export const fetchAllPosts = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/posts'
    })
}

export const createPost = (post) => {
    return $.ajax({
        method: "POST",
        url: `/api/posts`,
        data: post,
        contentType: false,
        processData: false,
    })
}

export const updatePost = (post) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/posts/${post.id}`,
        data: {post}
    })
}

export const destroyPost = (postId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/posts/${postId}`
    })
)