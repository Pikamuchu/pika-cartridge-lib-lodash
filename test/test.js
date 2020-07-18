var sinon = require('sinon');
var { assert } = require('chai');
var searchquire = require('searchquire');

describe('lodash library', () => {
    let _array;

    before(() => {
        // initialize test config and spies
        _array = searchquire(
            '*/cartridge/scripts/lib/lodash/array',
            {
                basePath: '../cartridges/lib_lodash/cartridge',
                pattern: '*/cartridge/(.*)',
                maxSearchModuleIterations: 20
            },
            {
            }
        );
    });

    beforeEach(() => {
        // reset spies
    });

    describe('lodash initialization', () => {
        it('lodash defined', () => {
            assert.isDefined(_array);
        });
    });
});
