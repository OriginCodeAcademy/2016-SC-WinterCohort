(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['WeatherFactory'];

    /* @ngInject */
    function WeatherController(WeatherFactory) {
        var vm = this;
        vm.title = 'WeatherController';

        getWeather();

        function getWeather() {
            WeatherFactory.getWeather().then(
                function(data) {

                    vm.results = data;

                },
                function(error) {
                    vm.error = 'There has been an error!';
                });
        }
    }
})();
