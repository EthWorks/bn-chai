var chai = require('chai');
var expect = chai.expect;
var BN = require('bn.js');
var bnChai = require('../index.js').bnChaiInit(BN);
chai.use(bnChai);

// all tests should fail

describe('bn-chai fail tests', function () {
  describe('used with .BN.', function () {
    it('should be equal', function () {
      expect(new BN('1')).to.be.BN.equal(new BN('2'));
    });
  
    it('should not be equal', function () {
      expect(new BN('1')).to.not.be.BN.equal(new BN('1'));
    });
  
    it('should be negative', function () {
      expect(new BN('1')).to.be.BN.negative;
    });
  
    it('should not be negative', function () {
      expect(new BN('-1')).to.not.be.BN.negative;
    });
  
    it('should be even', function () {
      expect(new BN('1')).to.be.BN.even;
    });
  
    it('should be odd', function () {
      expect(new BN('2')).to.be.BN.odd;
    });
  
    it('should be zero', function () {
      expect(new BN('1')).to.be.BN.zero;
    });
  
    it('should not ne zero', function () {
      expect(new BN('0')).to.not.be.BN.zero;
    });
  
    it('should be below', function () {
      expect(new BN('1')).to.be.BN.below(new BN('1'));
    });
  
    it('should be most', function () {
      expect(new BN('1')).to.be.BN.most(new BN('0'));
    });
  
    it('should be above', function () {
      expect(new BN('1')).to.be.BN.above(new BN('1'));
    });
  
    it('should be least', function () {
      expect(new BN('0')).to.be.BN.least(new BN('1'));
    });
  })
  
  describe('used without .BN.', function () {
    it('should be equal', function () {
      expect(new BN('1')).to.be.equal(new BN('1'));
    });

    it('should be negative', function () {
      expect(new BN('-1')).to.be.negative;
    });

    it('should not be negative', function () {
      expect(new BN('1')).to.not.be.negative;
    });

    it('should be even', function () {
      expect(new BN('2')).to.be.even;
    });

    it('should be odd', function () {
      expect(new BN('1')).to.be.odd;
    });

    it('should be zero', function () {
      expect(new BN('0')).to.be.zero;
    });

    it('should not be zero', function () {
      expect(new BN('1')).to.not.be.zero;
    });

    it('should be below', function () {
      expect(new BN('1')).to.be.below(new BN('2'));
    });

    it('should be most', function () {
      expect(new BN('1')).to.be.most(new BN('1'));
    });

    it('should be above', function () {
      expect(new BN('2')).to.be.above(new BN('1'));
    });

    it('should be least', function () {
      expect(new BN('1')).to.be.least(new BN('1'));
    });
  })
});