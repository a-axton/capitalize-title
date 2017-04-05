## Capitalize Title
Properly capitalize an article or blog title in Javascript. Code adapted from this post from John Resig in 2008 http://ejohn.org/blog/title-capitalization-in-javascript/.

### Rules
- Doesn't capitalize certain small words (a, an, and, as, at, but, by, en, for, if, in, of, on, or, the, to, v, via, vs)
- Doesn't change words when they have other letters than the first capitalized, eg. iTunes
- Skips words with dots, eg example.com
- First and last word of the title are always capitalized, except for the previous two rules
- A small word after a colon will be capitalized

### Installation
```
npm i capitalize-title -s
```
```
yarn add capitalize-title
```

### Usage
```
  import capitalizeTitle from 'capitalize-title';
  console.log(capitalizeTitle('this is an example title'));
  // > "This is an Example Title"
```

### License
MIT