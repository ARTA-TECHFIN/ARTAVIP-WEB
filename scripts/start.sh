echo "Start PM2"
cd /srv/www/corp_site/current && pm2 start pm2.json
echo "Done"
echo ""

echo "Restart Nginx"
sudo service nginx restart
echo "Done"
echo ""