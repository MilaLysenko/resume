'use strict';

angular
    .module( 'resumeApp',
        [
            'ui.router',
            'ui.bootstrap'
        ] )
    
    .config( [ '$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider ) {
        
        $urlRouterProvider.otherwise( '/home' );
        $stateProvider
            .state( 'home', {
                url: '/home',
                templateUrl: 'home.html'
            } )
            .state( 'blog', {
                url: '/blog',
                templateUrl: 'blog.html'
            } )
            .state( 'single-article', {
                url: '/single-article',
                templateUrl: 'single-article.html'
            } )
    } ] )
    
    .controller( 'ResumeController', [ '$scope', '$anchorScroll', function ( $scope, $anchorScroll ) {
        var vm = $scope.vm = {
            scrollTo: function ( id ) {
                $anchorScroll( id );
            },
           /* portfolio: [
                {
                    bg: '../images/bullsy.png'
                },
                {
                    bg: '../images/ex-bugsex.jpg'
                },
                {
                    bg: '../images/almentor.jpg'
                },
                {
                    bg: '../images/form-validation.jpg'
                },
                {
                    bg: '../images/scr-keloid.jpg'
                },
                {
                    bg: '../images/ex-rating.jpg'
                }
            ],*/
            groups: [
                {
                    title: 'CSS Preprocessors',
                    icon: 'fa-desktop',
                    content: [ 'LESS', 'SASS', 'SCSS' ]
                },
                {
                    title: 'Languages',
                    icon: 'fa-globe',
                    content: [ 'English - Intermediate', 'Ukrainian', 'Russian' ]
                }
            ]
        };
        $scope.oneAtATime = true;
        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };
    } ] );
