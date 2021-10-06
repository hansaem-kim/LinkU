export const getUser = (id) => (
    $.ajax({
        url: `/api/users/${id}`,
        method: 'GET'
    })
);

export const getUsers = () => (
    $.ajax({
        url: `/api/users`,
        method: 'GET'
    })
)

export const updateUser = (user) => (
    $.ajax({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        data: {user}
    })
);

