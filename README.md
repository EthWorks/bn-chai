# bn-chai
BN chai extends [Chai](http://chaijs.com/) with [bn.js](https://github.com/indutny/bn.js/) operations.

## Installation and setup

```javascript
var chai = require("chai");
var BN = require('bn.js');
var bnChai = require('bn-chai').bnChaiInit(BN);
chai.use(bnChai);
```

## Usage

### equal
```javascript
expect(new BN('1')).to.be.BN.equal(new BN('1'));
expect(new BN('1')).to.not.be.BN.equal(new BN('0'));
```

### below
```javascript
expect(new BN('0')).to.be.BN.below(new BN('1'));
expect(new BN('1')).to.not.be.BN.below(new BN('1'));
```

### most
```javascript
expect(new BN('0')).to.be.BN.most(new BN('1'));
expect(new BN('1')).to.be.BN.most(new BN('1'));
expect(new BN('2')).to.not.be.BN.most(new BN('1'));
```

### above
```javascript
expect(new BN('1')).to.be.BN.above(new BN('0'));
expect(new BN('1')).to.not.be.BN.above(new BN('1'));
```

### least
```javascript
expect(new BN('1')).to.be.BN.least(new BN('0'));
expect(new BN('1')).to.be.BN.least(new BN('1'));
expect(new BN('1')).to.not.be.BN.least(new BN('2'));
```

### negative
```javascript
expect(new BN('-1')).to.be.BN.negative;
expect(new BN('1')).to.not.be.BN.negative;
```

### even
```javascript
expect(new BN('2')).to.be.BN.even;
expect(new BN('1')).to.not.be.BN.even;
```

### odd
```javascript
expect(new BN('1')).to.be.BN.odd;
expect(new BN('2')).to.not.be.BN.odd;
```

### zero
```javascript
expect(new BN('0')).to.be.BN.zero;
expect(new BN('1')).to.not.be.BN.zero;
```

## Mixing BN, numbers and strings

You can mix BN with numbers and strings like so:

```javascript
expect(new BN('1')).to.be.BN.equal(new BN('1'));
expect(new BN('1')).to.be.BN.equal('1');
expect(new BN('1')).to.be.BN.equal(1);

expect('1').to.be.BN.equal(new BN('1'));
expect('1').to.be.BN.equal('1');
expect('1').to.be.BN.equal(1);

expect(1).to.be.BN.equal(new BN('1'));
expect(1).to.be.BN.equal('1');
expect(1).to.be.BN.equal(1);
```
