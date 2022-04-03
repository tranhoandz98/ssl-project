<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <link rel="stylesheet" href="/css/app.css" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body class="">
    <div id="root"></div>
    <script src={{ asset('/js/index.js') }} ></script>

</body>

</html>
