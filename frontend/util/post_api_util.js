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
    return $.ajax({
        method: "POST",
        url: `/api/posts`,
        data: post,
        processData: false,
        contentType: false
    })
}

export const updatePost = (post) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/posts/${post.id}`,
        data: post,
        processData: false,
        contentType: false
    })
}

export const destroyPost = (postId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/posts/${postId}`
    })
)