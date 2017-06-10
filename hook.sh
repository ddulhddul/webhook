REPOSITORY = "../youtube"
cd $REPOSITORY
git pull
pm2 stop app
pm2 start app
