json.connection do
    json.set! @connection.id do
        json.extract! @connection, :id, :follower_id, :followee_id, :accepted
    end
end