# moko-embeds

Embeddable documents for moko

## Work in Progress

This plugin is not yet done.

## Usage Example

```js
var embeds = require('moko-embeds');

var Color = moko('Color').attr('red').attr('green').attr('blue').attr('alpha');

Color.prototype.description = function() { console.log("r: %d, g: %d, b: %d, a: %d") };


var User = moko('User').attr('favoriteColor', { embeds: Color });

User.use(embeds);

var user = yield new User({favoriteColor: { red: 255, green: 123, blue: 255 }});
user.favoriteColor instanceof Color // true
user.favoriteColor.description() // runs method above
```
