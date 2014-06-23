var expect = require('expect.js'),
    moko   = require('moko'),
    embeds = require('../');


describe('moko-embeds', function() {
  var Color = moko('Color').attr('name');
  var Account = moko('Account').attr('balance').attr('type');

  var User = moko('User')
    .attr('username')
    .attr('favoriteColor', { embeds: Color })
    .attr('accounts', { embeds: Account });

  User.use(embeds);

  it('is a moko plugin', function() {
    expect(embeds).to.be.a(Function);
  });

  it('initializes embeddable single-documents', function*() {
    var user = yield new User({username: 'Bob', favoriteColor: { name: 'Blue' }});
    expect(user.favoriteColor).to.be.a(Color);
  });
});
