(function(){
    angular.module('acaiLoader', [])
        .service('acaiLoaderService', [function(){
            var _loaderToggle ={
                condition:false
            };
            var promises =[];

            this.showLoader = function (promise){
                if (promises.length === 0){
                    _loaderToggle.condition = true;
                }
                promises.push(promise);
                promise.finally(function(){
                    promises.shift();
                    if (promises.length === 0){
                        _loaderToggle.condition = false;
                    }
                })
            }

            return{
                loaderToggle: _loaderToggle,
                showLoader: this.showLoader
            }
        }])
        .directive('acaiLoader',   ['acaiLoaderService' ,function (acaiLoaderService){
            return {
                template: '<div class="loader-container" ng-show="toggle.condition"><div class="loading-text"><img class="loading-img"><label class="loading-label">Loading...</label></div></div>',
                restrict: 'AE',
                replace: true,
                scope :{},
                link: function (scope, elm, attrs)
                {
                    scope.toggle = acaiLoaderService.loaderToggle;
                }
            };

        }]);


}).call(this);