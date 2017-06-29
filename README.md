# P7-react-host
The react variant of [P7-riotjs-host](https://github.com/ghstahl/P7-riotjs-host), based off of
[boilerplate-react](https://github.com/djizco/boilerplate-react)


## Get the kit

```
$ git clone https://github.com/ghstahl/P7-react-host.git && cd P7-react-host
```

## Installation

```
$ npm install
```

## Development

```
$ npm run dev
```
currently this doesn't watch the plugin area.  
Now the server is runnning on localhost:1338

## Production

```
$ npm run prod
```
This will build everything.


## Bootswatch Theming

The index.js can be modified to use any of the existing themes provided by [Bootswatch](https://github.com/thomaspark/bootswatch/).
Change line 01 from `import 'bootswatch/slate/bootstrap.css';` to `import 'bootswatch/{bootswatch-theme-name}/bootstrap.css';` to do this.
Save and preview the page immediately with the live reload feature.

