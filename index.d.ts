/**
Compare camelized/dasherized/underscored strings each other

@param first - The string to make human readable.
@param second - The string to make human readable.
@param options - The options

@example
```
import aynen from 'aynen';

aynen('fooBar', 'foo-bar');
//=> true

aynen('foo_bar', 'FOO-BAR');
//=> true

aynen('fooBar', 'foo-bar', 
    { 
        rating: true
    }
);
//=> { isSame: true, similarityRating: 1 }

```
*/
export default function aynen(first: string, second: string, options?: object): any;
