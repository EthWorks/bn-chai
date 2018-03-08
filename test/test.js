var chai = require('chai');
var expect = chai.expect;
var BN = require('bn.js');
var bnChai = require('../index.js').bnChaiInit(BN);
chai.use(bnChai);

describe('bn-chai', function () {
  it('should be equal', function () {
    expect(new BN('1')).to.be.BN.equal(new BN('1'));
    expect(new BN('1')).to.be.BN.equal(1);
    expect(new BN('1')).to.be.BN.equal('1');
    expect(1).to.be.BN.equal('1');
  });

  it('should not be equal', function () {
    expect(new BN('1')).to.not.be.BN.equal(new BN('0'));
    expect(new BN('1')).to.not.be.BN.equal(0);
    expect(new BN('1')).to.not.be.BN.equal('0');
    expect(1).to.not.be.BN.equal('0');
  });

  it('should be negative', function () {
    expect(new BN('-1')).to.be.BN.negative;
    expect('-1').to.be.BN.negative;
    expect(-1).to.be.BN.negative;
  });

  it('should not be negative', function () {
    expect(new BN('1')).to.not.be.BN.negative;
  });

  it('should be even', function () {
    expect(new BN('2')).to.be.BN.even;
    expect('2').to.be.BN.even;
    expect(2).to.be.BN.even;
  });

  it('should not be even', function () {
    expect(1).to.not.be.BN.even;
  });

  it('should be odd', function () {
    expect(new BN('1')).to.be.BN.odd;
    expect('1').to.be.BN.odd;
    expect(1).to.be.BN.odd;
  });

  it('should not be odd', function () {
    expect(2).to.not.be.BN.odd;
  });

  it('should be zero', function () {
    expect(new BN('0')).to.be.BN.zero;
    expect('0').to.be.BN.zero;
    expect(0).to.be.BN.zero;
  });

  it('should not be zero', function () {
    expect(new BN('1')).to.not.be.BN.zero;
  });

  it('should be below', function () {
    expect(new BN('0')).to.be.BN.below(new BN('1'));
  });

  it('should not be below', function () {
    expect(new BN('1')).to.not.be.BN.below(new BN('1'));
  });

  it('should be most', function () {
    expect(new BN('0')).to.be.BN.most(new BN('1'));
    expect(new BN('1')).to.be.BN.most(new BN('1'));
  });

  it('should not be most', function () {
    expect(new BN('2')).to.not.be.BN.most(new BN('1'));
  });

  it('should be above', function () {
    expect(new BN('1')).to.be.BN.above(new BN('0'));
  });

  it('should not be above', function () {
    expect(new BN('1')).to.not.be.BN.above(new BN('1'));
  });

  it('should be least', function () {
    expect(new BN('1')).to.be.BN.least(new BN('0'));
    expect(new BN('1')).to.be.BN.least(new BN('1'));
  });

  it('should not be least', function () {
    expect(new BN('1')).to.not.be.BN.least(new BN('2'));
  });
});