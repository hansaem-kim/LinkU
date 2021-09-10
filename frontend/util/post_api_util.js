export const fetchAllPosts = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/posts'
    })
}

export const fetchPost = (postId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}`
    })
}


export const createPost = (post) => {
    debugger;
    return $.ajax({
        method: "POST",
        url: `/api/posts`,
        data: {post},
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