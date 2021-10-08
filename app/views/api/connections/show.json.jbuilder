json.connection do
    json.set! @connection.id do
        json.partial! `/api/connections/connection`, connection: @connection
    end
end