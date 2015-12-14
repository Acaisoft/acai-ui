// Type definitions for acaiLoader
// Project:
// Definitions by: Lukasz Potapczuk <https://github.com/lpotapczuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../../typings/angularjs/angular.d.ts" />

interface acaiLoaderService{
    showLoader:(promise:ng.IPromise<any>) =>void;
}
