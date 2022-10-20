echo "Stop PM2"
cd /srv/www/corp_site/current && pm2 delete pm2.json
echo "Done"