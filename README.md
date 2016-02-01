# jspm + typescript + es6 boilerplate

This repo shows how to setup jspm for transpiling typescript es6 code (including async/await!) to es5. The typescript compiler is used to compile to es6 code and babel is used to compile to es5.

```
npm run install-deps
```

## Development
```
npm run serve
```
Open `http://localhost:8080` and hack!

## Production
```
npm run bundle
```
Open `http://localhost:8080/index-bundle.html`.