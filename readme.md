## pdftk-lambda

### Installation and Usage

```bash
npm i pdftk-lambda
```

Next, require the package at the top of your lambda function.

```js
// modifies PATH, LD_LIBRARY_PATH, and PKG_CONFIG_PATH to point to the pdftk binary and libgcj.so.10
require('pdftk-lambda')

```

## Why This Package?

Installing this package makes it possible to use pdftk in AWS lambda. It includes two binaries, pdftk and the dependency libgcj.so.10.

`pdftk-lambda` was compiled using the latest public Amazon Linux AMI version (amzn-ami-hvm-2017.03.1.20170812-x86_64-gp2) as of this writing (07/24/2018).

