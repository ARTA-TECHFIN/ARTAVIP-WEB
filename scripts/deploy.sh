echo "Deploy project files"
NOW=$(TZ='Asia/Hong_Kong' date +"%Y%m%d%H%M")
FILE="corp_site-$NOW"
cp -R /srv/www/corp_site/code_deploy /srv/www/corp_site/releases/$FILE
echo "Done"
echo ""

echo "Update Symlink"
ln -sfn /srv/www/corp_site/releases/$FILE /srv/www/corp_site/current
echo "Done"
echo ""