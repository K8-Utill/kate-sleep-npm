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
