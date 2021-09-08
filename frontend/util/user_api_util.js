export const getUser = (id) => (
    $.ajax({
        url: `/api/users/${id}`,
        method: 'GET'
    })
);
