cd www/build

# make a bundle
cat polyfills.js vendor.js main.js > bundle.js

# replace `ion-app`
sed -i '' "s/ion-app/medwhizz-agenda/g" bundle.js
sed -i '' "s/ion-app/medwhizz-agenda/g" main.css

cd ..
