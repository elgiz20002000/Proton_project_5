# jQuery grid ver 1.0.0

jQuery plugin for creating maronry grid. [Demo](https://jsfiddle.net/Umkka/y8xghswd/)

For using just add to the body:
```html
	<script src="http://code.jquery.com/jquery-2.2.2.min.js"></script>
	<script src="js/masonry.min.js"></script>
```

Init example:
```javascript
	$('.msrItems').msrItems({
		'colums': 3, //columns number
		'margin': 15 //right and bottom margin
	});
```
All of this arguments are not required

For updating columns size on window resize:
```javascript
	var time = undefined;
	$( window ).on('resize', function(e) {
		clearTimeout(time);
		time = setTimeout(function(){
			$('.msrItems').msrItems('refresh');
		}, 200);
	})
```

For loading new elements without updating existing:
```javascript
	$('.msrItems').msrItems('doload', [
		'<div class="itm8 msrItem"></div>',
		'<div class="itm9 msrItem"></div>',
		'<div class="itm10 msrItem"></div>'
	]);
```
