# Webpack side-effects flag comparison on Angular

This repo compares how using `"sideEffects": false` reduces bundle size for Angular.

It includes a vendor chunk to add indirection to module loading. 
This prevents Webpack 3 with UglifyJS from dropping the unused Angular imports but Webpack 4 
[side effect detection](https://github.com/webpack/webpack/tree/next/examples/side-effects)
can still remove used code.

```
cd webpack-3
npm i
npm start 
# source-map-explorer will open on your browser, with all of Angular
cd ../webpack-4
npm i
npm start
# source-map-explorer will open on your browser, with all of Angular still
```

Webpack 3 bundle sizes:
```
-rw-r--r-- 1 kamik 197609  790 Jan  5 17:16 main.js
-rw-r--r-- 1 kamik 197609 666K Jan  5 17:16 vendor.js
```

Webpack 4 bundle sizes:
```
-rw-r--r-- 1 kamik 197609  825 Jan  5 17:40 main.js
-rw-r--r-- 1 kamik 197609 652K Jan  5 17:40 vendor.js
```

# License
MIT