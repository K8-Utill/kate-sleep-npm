# Docs

## Installation

In your node project just do `npm i kate-sleep` and all set to start helping Kate sleep!

## Kate

When importing Kate (`require('kate-sleep')`) It will return a some useful functions to get Kate sleeping/awake and more!.

### Sleep

This is a Function that will put Kate to sleep. It accepts 1 parameter which is a Object.

<p style="font-size:12px;">Basic Usage<p>

```js
const kate = require('kate-sleep');
kate.sleep();
```

In the 1 paramter that is a Object can be composed of 2 values.

`stuffedAnimals` a Array or String, we offer 5 stuffed animal which is `Baby Fox, Moose, Frog, Dog, Wolf` but you can use your own stuffed animals.

`cozyBed` is a Boolean, this will determine if Kate sleeps in a cozy bed or not.

<p style="font-size:12px;">Classic sleep<p>

```js
const kate = require('kate-sleep');
kate.sleep({ stuffedAnimals: ['Baby Fox', 'Dog'], cozyBed: true });
```

### Wake

This is a Function that will wake up Kate.

<p style="font-size:12px;">Usage<p>

```js
const kate = require('kate-sleep');
kate.wake();
```

### Meth

This is a function for Kate to have a little fun. This accepts 1 parameter which is a Object.

<p style="font-size:12px;">Basic Usage<p>

```js
const kate = require('kate-sleep');
kate.meth();
```

`quality` a String that should be one of the following: "high", "average", "low". The quality of meth.

`amount` a String that should be one of the following: "huge", "normal", "small". Amount of meth.

`sharedWith` sometimes Kate just want to do some meth with friends. A String that should be one of the following: "Cynthia", "Ben", "Alice", "Joakim", "Emma", "Aetheryx", "Everyone", "Baby Fox"

<p style="font-size:12px;">Share the meth<p>

```js
const kate = require('kate-sleep');
kate.meth({ quality: 'average', amount: 'huge', sharedWith: 'Everyone' });
```
