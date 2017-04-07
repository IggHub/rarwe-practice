import { test } from 'qunit';
import moduleForAcceptance from 'rarwe-practice/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | power select practice');

test('visiting /power-select-practice', function(assert) {
  visit('/');
  selectChoose('.power-select', 'mailing');
  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
