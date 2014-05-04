# require rubygems and sinatra so you can run this application locally with ruby app.rb
require 'rubygems'
require 'sinatra'

get '/' do
	send_file 'app/index.html'
end
get '/videojs' do
	send_file 'app/partials/videojs.html'
end
get '/jPlayer' do
	send_file 'app/partials/jPlayer.html'
end
get '/*' do
        send_file "#{params[:splat][0]}"
end

