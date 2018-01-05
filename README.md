# Webpack side-effects flag comparison on RxJs operators

This repo compares how using `"sideEffects": false` reduces bundle size for RxJs operators.

It includes a lazy chunk to add indirection to module loading. 
This prevents Webpack 3 with UglifyJS from dropping the unused RxJs imports but Webpack 4 
[side effect detection](https://github.com/webpack/webpack/tree/next/examples/side-effects)
can still remove used code.

```
cd webpack-3
npm i
npm start 
# source-map-explorer will open on your browser, with all rxjs operators in the main bundle
cd ../webpack-4
npm i
npm start
# source-map-explorer will open on your browser, with only the used rxjs operators in the main bundle
```

Webpack 3 bundle sizes:
```
total 2.3M
-rw-r--r-- 1 kamik 197609  159 Jan  5 16:37 0.js
-rw-r--r-- 1 kamik 197609 1.1K Jan  5 16:37 0.js.map
-rw-r--r-- 1 kamik 197609 125K Jan  5 16:37 main.js
-rw-r--r-- 1 kamik 197609 1.3M Jan  5 16:37 main.js.map
```

Webpack 4 bundle sizes:
```
total 120K
-rw-r--r-- 1 kamik 197609 5.7K Jan  5 16:40 0.js
-rw-r--r-- 1 kamik 197609  47K Jan  5 16:40 0.js.map
-rw-r--r-- 1 kamik 197609 8.7K Jan  5 16:40 main.js
-rw-r--r-- 1 kamik 197609  46K Jan  5 16:40 main.js.map
```

# License
MIT