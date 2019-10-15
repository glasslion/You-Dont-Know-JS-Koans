describe('Chapter 1: Into Programming', function() {
  it('Try It Yourself https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#try-it-yourself', function() {
    a = 21;
    b = a * 2;
    expect(b).to.equal(FILL_HERE);
  });

  it('Operators https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#operators', function() {
    var a = 20;
    a = a + 1;
    a = a * 2;

    expect(a).to.equal(FILL_HERE);
  });

  it('Converting Between Types https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#converting-between-types', function() {
    var a = "42";
    var b = Number( a );

    expect(b).to.equal(FILL_HERE);
  });

  it('Variables https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#variables', function() {
    var amount = 99;
    amount = amount * 2;
    amount = "$" + String( amount )

    expect(amount).to.equal(FILL_HERE);
  })

  it('Variables https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#variables', function() {
    var TAX_RATE = 0.08;
    TAX_RATE += 1

    expect(amount).to.equal(FILL_HERE);
  })



});


describe('Blocks', function() {
  // Reference: https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#blocks

  it('a general block', function() {
    var amount = 9;
    {
      amount = amount * 2;
      expect(amount).to.equal(18);
    }
    expect(amount).to.equal(18);
  })
});


describe('Conditionals', function() {
  // Reference: https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#blocks


});