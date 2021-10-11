export const fetchConnections = (userId) => (
    $.ajax({
        url: `api/connections`,
        data: {userId}
    }) 
);

export const createConnection = (connection) => (
    $.ajax({
        type: 'POST',
        url: `api/connections`,
        data: {connection}
    })
);

export const deleteConnection = (connectionId) => (
    $.ajax({
        type: 'DELETE',
        url: `api/connections/${connectionId}`
    })
)