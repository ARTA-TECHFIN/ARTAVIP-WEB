echo "Start PM2"
cd /srv/www/corp_site/current && pm2 start pm2.json
echo "Done"
echo ""

echo "Restart Nginx"
sudo rm -rf /etc/nginx/sites-enabled/*
sudo cp /srv/www/corp_site/current/nginx/corp_site /etc/nginx/sites-available/corp_site
sudo rm -rf /srv/www/corp_site/current/nginx
sudo ln -sfn /etc/nginx/sites-available/corp_site /etc/nginx/sites-enabled/corp_site
sudo service nginx restart
echo "Done"
echo ""
