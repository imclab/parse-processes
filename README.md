# Processes

List processes on Unix/Linux.

## Installation

```
npm install parse-processes
```

## Example

```js
var processes = require('parse-processes');

processes(function(err, result){
  result.forEach(function(p){
    console.log(p.id, p.tty, p.time, p.cmd);
  });
});
```

## Licence

MIT