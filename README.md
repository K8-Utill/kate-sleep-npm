# kate-sleep-npm
Help kate sleep 

Zzz

For it to work install in the powercord dir
## Status
[![.github/workflows/npm-publish2.yml](https://github.com/Official-Hawks/kate-sleep-npm/actions/workflows/npm-publish2.yml/badge.svg)](https://github.com/Official-Hawks/kate-sleep-npm/actions/workflows/npm-publish2.yml)
## Test it
[Click Me](https://npm.runkit.com/kate-sleep)
## PR
If you do a pr please update the package version ty!


## Docs
If making a pr to update docs put below this line I have to update it by hand#

### Installation

In your node project just do `npm i kate-sleep` and all set to start helping Kate sleep!

### Kate

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

### Sleepover

This is a Function for Kate and friends to have a sleepover.

<p style="font-size: 12px;">Basic Usage</p>

```js
const kate = require('kate-sleep');
kate.sleepover({ invited: 'Olykir' });
```

This Function accepts 1 parameter that is a Object they are:

`invited` This can be a Array or String. This will send a message to who is invited to come over for a sleepover. So far we offer "Cynthia", "Ben", "Alice", "Joakim", "Emma", "Aetheryx", "Olykir" to be invited but you can invited anyone to have a sleepover with Kate.

`cozyBeds` This is a Boolean. This will determine if Kate and friends sleep in cozy beds

<p style="font-size: 12px;">Big sleepover</p>

```js
const kate = require('kate-sleep');
kate.sleepover({ invited: ['Cynthia', 'Ben', 'Alice', 'Joakim', 'Emma', 'Aetheryx', 'Olykir'], cozyBeds: true });
```

### isSleeping

This is a proprety and will return a boolean. Will return if Kate is sleeping.

<p style="font-size: 12px;">Usage</p>

```js
const kate = require('kate-sleep');

if (!kate.isSleeping) {
  kate.sleep();
}
```

### isCozy
This is a proprety and will return a boolean. Will return if Kate is cozy. 

<p style="font-size: 12px;">Usage</p>

```js
const kate = require('kate-sleep');

kate.sleep();

if (kate.isSleeping && !kate.isCozy) {
  kate.wake();
  kate.sleep({ cozyBed: true });
}
```

### Say

This is a async function that will send say something to kate!

<p style="font-size: 12px;">Basic usage</p>

```js
const kate = require('kate-sleep');

async function say(text) {
  await kate.say(text)
}

say('hello')
```

### Color

This is a async function that will display a color on kates screen!

<p style="font-size: 12px;">Basic usage</p>

```js
const kate = require('kate-sleep');

async function color(color) {
  await kate.color(color)
}

color('hello')
```