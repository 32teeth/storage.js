# storage.js

**storage.js** is a simple abstraction of the browser *localStorage API*

## design pattern
**storage.js** is built on a module reveal pattern exposing three (3) core methods.

* data()
* remove()
* clear()

## usage

###data()
the *data* method can be called as a setter or getter

####*data()* as a setter
```
/*
@param property {string} string name of property
@param value {string|number|object|function|array|json} value of named property
@description creates (if non existant property) or sets value to existing property
@description value can be anything (string, number, object, function, array)
*/
data(property, value)
```

####*data()* as a getter
```
/*
@param property {string} string name of property to return value of
@return value of named property, false if not found
*/
data(property)
```

###remove()
```
/*
@param property {string} string name of property to remove from storage
*/
remove(property)
```

###clear()
```
/*
@description clears localStorage object completely. good for ending sessions.
*/
clear()
```


