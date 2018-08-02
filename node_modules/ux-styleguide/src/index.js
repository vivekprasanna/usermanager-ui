(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var factoryModules = factory();
        root.TabList = factoryModules.TabList;
        root.Pagination = factoryModules.Pagination;
    }
}(this, function () {
    return {
        TabList: TabList,
        Pagination: Pagination
    };
}));