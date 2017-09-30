export default (html, state) => `
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
 
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/favicon.ico">

    <title>WIPKanban</title>
    <link rel="stylesheet" href="/assets/css/font-icons/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/css/main.css">
</head>

<body>
    <div id="root">${html}</div>
    <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(state)}
  </script>
  <script src="/dist/bundle.js"></script>

</html>
`;