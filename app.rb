require 'sinatra'

get '/ok' do
  'ok'
end

get '/ng' do
  500
end
