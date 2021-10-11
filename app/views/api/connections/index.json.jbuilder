@connections.each do |connection|
    json.set! connection.id do
        json.extract! connection, :id, :follower_id, :followee_id, :accepted
    end
end