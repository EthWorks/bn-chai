module.exports.bnChaiInit = function(BN) {
  const negativeProperty = function(actual) {
    this.assert(actual.isNeg(),
    'expected #{act} to be negative',
    'expected #{act} to not be negative',
    actual.toString(),
    actual.toString());
  }

  const evenProperty = function(actual) {
    this.assert(actual.isEven(),
    'expected #{act} to be even',
    'expected #{act} to not be even',
    undefined,
    actual.toString());
  }

  const oddProperty = function(actual) {
    this.assert(actual.isOdd(),
    'expected #{act} to be odd',
    'expected #{act} to not be odd',
    undefined,
    actual.toString());
  }

  const zeroProperty = function(actual) {
    this.assert(actual.isZero(),
    'expected #{act} to be zero',
    'expected #{act} to not be zero',
    undefined,
    actual.toString());
  }

  const equalMethod = function(expected, actual) {
    this.assert(
      actual.eq(expected),
      'expected #{act} to equal #{exp}',
      'expected #{act} to be different from #{exp}',
      expected.toString(),
      actual.toString()
    );
  }

  const belowMethod = function(expected, actual) {
    this.assert(
      actual.lt(expected),
      'expected #{act} to be below #{exp}',
      'expected #{act} to not be below #{exp}',
      expected.toString(),
      actual.toString()
    );
  }

  const mostMethod = function(expected, actual) {
    this.assert(
      actual.lte(expected),
      'expected #{act} to be at most #{exp}',
      'expected #{act} to not be at most #{exp}',
      expected.toString(),
      actual.toString()
    );
  }

  const aboveMethod = function(expected, actual) {
    this.assert(
      actual.gt(expected),
      'expected #{act} to be above #{exp}',
      'expected #{act} to not be above #{exp}',
      expected.toString(),
      actual.toString()
    );
  }

  const leastMethod = function(expected, actual) {
    this.assert(
      actual.gte(expected),
      'expected #{act} to be at least #{exp}',
      'expected #{act} to not be at least #{exp}',
      expected.toString(),
      actual.toString()
    );
  }

  return function (chai, utils) {
    chai.Assertion.addProperty('BN', function() {
      utils.flag(this, 'BN', true);
    });

    const overrideFn = function(newFn) {
      return function (_super) {
        return function (expected) {
          if (utils.flag(this, 'BN')) {
            newFn.apply(this, [new BN(expected), new BN(this._obj)]);
          } else {
            _super.apply(this, arguments);
          }
        }
      }
    }

    const addProp = function(newProp) {
      return function() {
        const msg = 'BN flag is not set. Did you forget (...).BN.(...) ?';
        if (utils.flag(this, 'negate')) {
          this.assert(!utils.flag(this, 'BN'), msg, msg);
        } else {
          this.assert(utils.flag(this, 'BN'), msg, msg);
        }
        newProp.apply(this, [new BN(this._obj)]);
      }
    }

    chai.Assertion.addProperty('negative', addProp(negativeProperty))
    chai.Assertion.addProperty('even', addProp(evenProperty));
    chai.Assertion.addProperty('odd', addProp(oddProperty));
    chai.Assertion.addProperty('zero', addProp(zeroProperty));

    chai.Assertion.overwriteMethod('equal', overrideFn(equalMethod));
    chai.Assertion.overwriteMethod('below', overrideFn(belowMethod));
    chai.Assertion.overwriteMethod('most', overrideFn(mostMethod));
    chai.Assertion.overwriteMethod('above', overrideFn(aboveMethod));
    chai.Assertion.overwriteMethod('least', overrideFn(leastMethod));
  };
};
