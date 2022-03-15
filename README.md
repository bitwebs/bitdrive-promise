# bitdrive-promise

An async/await based wrapper for [bitdrive](https://github.com/mafintosh/bitdrive) (v10+)


## Install

```
$ npm install @web4/bitdrive-promise
```

## Usage

`bitdrive-promise` its totally [API compatible](https://github.com/bitwebs/bitdrive#api) with bitdrive v10+. It's only a promise based wrapper.

E.g.:

```javascript
const bitdrive = require('@web4/bitdrive-promise')
const archive = bitdrive('./my-first-bitdrive') // content will be stored in this folder

try {
  await archive.writeFile('/hello.txt', 'world')
  const list = await archive.readdir('/')
  console.log(list) // prints ['hello.txt']
  const data = await archive.readFile('/hello.txt', 'utf-8')
  console.log(data) // prints 'world'
} catch (err) {
  console.log(err)
  // deal with the err
}

```

## Release

`npm version` && `npm publish`

## Contributing

:busts_in_silhouette: Ideas and contributions to the project are welcome. You must follow this [guideline](https://github.com/bitwebs/bitdrive-promise/blob/master/CONTRIBUTING.md).
