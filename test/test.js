var sinon = require('sinon');
var { assert } = require('chai');
var searchquire = require('searchquire');

describe('lodash library', () => {
    let _ = {};

    before(() => {
        const config = {
            basePath: '../cartridges/lib_lodash/cartridge',
            pattern: '*/cartridge/(.*)',
            maxSearchModuleIterations: 20
        };
        // initialize test config and spies
        _.array = searchquire('*/cartridge/scripts/lib/lodash/array', config);
        _.chain = searchquire('*/cartridge/scripts/lib/lodash/chain', config);
        _.collection = searchquire('*/cartridge/scripts/lib/lodash/collection', config);
        _.date = searchquire('*/cartridge/scripts/lib/lodash/date', config);
        _.function = searchquire('*/cartridge/scripts/lib/lodash/function', config);
        _.lang = searchquire('*/cartridge/scripts/lib/lodash/lang', config);
        _.math = searchquire('*/cartridge/scripts/lib/lodash/math', config);
        _.number = searchquire('*/cartridge/scripts/lib/lodash/number', config);
        _.object = searchquire('*/cartridge/scripts/lib/lodash/object', config);
        _.string = searchquire('*/cartridge/scripts/lib/lodash/string', config);
        _.support = searchquire('*/cartridge/scripts/lib/lodash/support', config);
        _.utility = searchquire('*/cartridge/scripts/lib/lodash/utility', config);
    });

    beforeEach(() => {
        // reset spies
    });

    describe('lodash initialization', () => {
        it('lodash defined', () => {
            assert.isDefined(_.array);
            assert.isDefined(_.chain);
            assert.isDefined(_.collection);
            assert.isDefined(_.date);
            assert.isDefined(_.function);
            assert.isDefined(_.lang);
            assert.isDefined(_.math);
            assert.isDefined(_.number);
            assert.isDefined(_.object);
            assert.isDefined(_.string);
            assert.isDefined(_.support);
            assert.isDefined(_.utility);
        });
    });
});
