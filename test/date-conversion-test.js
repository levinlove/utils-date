const vows = require('vows');
const assert = require('assert');

const utilsDate = require('../dist/utils-date');

vows.describe('Date Conversion').addBatch({
    'timestamp conversion': {
        topic: function () { return utilsDate.parse(1528278558218) },
        'returns a valid date object': function (date) {
            assert.ok(date)
        },
        'returns a correct value': function (date) {
            assert.equal(date.valueOf(), 1528278558218)
        }
    },
    'sql date conversion': {
        topic: function () { return utilsDate.parse(/Date(1528278558218)/) },
        'returns a valid date object': function (date) {
            assert.ok(date)
        },
        'returns a correct value': function (date) {
            assert.equal(date.valueOf(), 1528278558218)
        }
    }
}).export(module);
