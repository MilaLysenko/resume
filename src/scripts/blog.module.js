'use strict';

angular
    .module( 'index.blog', [] )
    
    .config( function ( $stateProvider ) {
        $stateProvider.state( 'index.blog', {
            url: '/blog',
            templateUrl: 'blog.html',
            controller: 'blogController'
        } );
    } );
