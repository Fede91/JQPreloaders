#JQPreloaders
***
#### JQPreloaders is a collection of preloaders for any web content and is powered by jQuery and CSS. Refer to the Test folder for the list of usable preloaders.

### How it works
***
#### Requirements

You need jQuery to run JQPreloaders. Add this code to your web page:
```html
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
```

#### HTML
To add a preloader to your page, add the following HTML code after the `<body>` tag:
```html
<div id="jQPreloader"></div>
```

#### Javascript
To start a preloader, add the following Javascript code inside the `<script>` tag:

````js
$(window).load(function() {
    $('#jQPreloader').jQPreloaders(type, settings);
}
````

### Options
-------

The settings you can change are:
```js
{
    dimension: 10 // default 50
}
```

### License
----

Made available under a MIT License    