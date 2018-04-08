REPOSITORY="/root/youtube"
cd $REPOSITORY
pm2 stop app.js
git pull
npm run build
npm install
pm2 start app.js
