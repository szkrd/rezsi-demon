# rezsi-demon

* Report electricity/gas/water meter, pay for electricity and the rest.
* Uses the [nightwatch](http://nightwatchjs.org/) test framework.
* Requires Chrome (uses the raw chromedriver, not the selenium backend).

## setup

1. `npm i`
2. create a dotenv file
3. store passwords in an encrypted form (`SECRET=H3110W0r1d npm run encrypt -- fooBarBaz`)
4. may want to use the `export HISTCONTROL=ignoreboth` (ignore duplicates and commands starting with a space)
   sane setting + encrypt your home folder

## .env example

```
ELMU_USERNAME=johndoe
ELMU_PASSWORD=8bee60d2cf25245347
```

## usage

### electricity, report

` SECRET=F00B@rB@z VALUE=12000 npm run elmu-meroallas`

### gas, report

Not working. The _főgáz_ site is so fucked up, I may or may not implement this e2e suite.
