cd ./modules
git clone https://github.com/jalibu/MMM-Jast.git && cd ./MMM-Jast && npm install && cd ../
git clone https://github.com/jclarke0000/MMM-MyScoreboard.git && cd ./MMM-MyScoreboard && npm install && cd ../
git clone https://github.com/paviro/MMM-PIR-Sensor.git && cd ./MMM-PIR-Sensor && npm install && sudo usermod -a -G gpio pi && sudo chmod u+s /opt/vc/bin/tvservice && sudo chmod u+s /bin/chvt && cd ../
git clone https://github.com/Jopyth/MMM-Remote-Control.git && cd ./MMM-Remote-Control && npm install && cd ../
git clone https://github.com/shbatm/octomirror-module.git && cd ./octomirror-module && npm install && wget http://octopi.local/static/webassets/packed_client.js -O packed_client.js && cd ../

