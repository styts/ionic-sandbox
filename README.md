# Medwhizz Agenda Sandbox testing

## Building

    npm run build -- --prod

    ./build.sh

Only need main.css and bundle.js:

    rsync -avz www/ wf:webapps/stytscom/agenda

## Usage

```html
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="//agenda.medwhizz.com/main.css">
  </head>
  <body>
    <medwhizz-agenda congress="42"></medwhizz-agenda>
    <script src="//agenda.medwhizz.com/bundle.js" ></script>
  </body>
</html>
```
