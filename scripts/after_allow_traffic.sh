echo "Delete oldest releases"
cd /srv/www/corp_site/releases && ls -1t | tail -n +2 | xargs rm -rf
sudo rm -rf /srv/www/corp_site/code_deploy
echo "Done"
echo ""
