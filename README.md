# Check If Port is Occupied

Check if the port is Occupied. If not, it returns the default value, otherwise, it will return a free port not be occupied.

## Install

> npm install portisoccupied --save

## Demos

### Example 1

```javascript
// Port 3000 is free
import portisoccupied from 'portisoccupied';

const port = await portisoccupied(3000);
```

#### Output
>  3000

### Example 2

```javascript
// Port 3000 is occupied
import * as net from 'net';
import portisoccupied from 'portisoccupied';

const server = net.createServer().listen(3000);
const port = await portisoccupied(3000);
```

#### Output
>  3001