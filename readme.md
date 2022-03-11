# aynen

> Compare camelized/dasherized/underscored strings each other

## Install

```sh
npm install aynen
```
```sh
yarn add aynen
```

## Usage

```js
import aynen from 'aynen';

aynen('fooBar', 'foo-bar');
//=> true

aynen('foo_bar', 'FOO-BAR');
//=> true

aynen('foo_bar', 'foo bar');
//=> true

aynen('foo', 'bar');
//=> false

```


#### Options
Name: `rating`
Type: `boolean`
Default: `false`

Return a object with degree of similarity and comparation between two strings 

```js
import aynen from 'aynen';

aynen('fooBar', 'foo-bar', 
    { 
        rating: true
    }
);
//=> { isSame: true, similarityRating: 1 }

aynen('foo-bar', 'bar_FOO',
    { 
        rating: true
    }
);
//=> { isSame: false, similarityRating: 0.8 }


```

## Related

- [humanize-string](https://github.com/sindresorhus/humanize-string)
- [string-similarity](https://github.com/aceakash/string-similarity)
