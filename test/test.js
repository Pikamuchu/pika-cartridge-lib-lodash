import sinon from 'sinon';
import { assert } from 'chai';
import searchquire from 'searchquire';

describe('lodash library', () => {
    let lodash;

    before(() => {
        // initialize test config and spies
        lodash = searchquire(
            '*/cartridge/scripts/lib/lodash/index',
            {
                basePath: '../cartridges/lib_lodash/cartridge',
                pattern: '*/cartridge/(.*)',
                maxSearchModuleIterations: 20
            },
            {}
        );
    });

    beforeEach(() => {
        // reset spies
    });

    describe('lodash initialization', () => {
        it('lodash defined', () => {
            assert.isDefined(lodash);
        });
    });
});
