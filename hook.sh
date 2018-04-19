REPOSITORY="/root/youtube"
cd $REPOSITORY
pm2 stop app.js
git pull
npm install
pm2 start app.js
