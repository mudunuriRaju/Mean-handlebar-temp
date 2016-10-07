describe('Service: Kapp.common', function () {

    // load the service's module
    beforeEach(module('Kapp'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (_common_) {
        service = _common_;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});
