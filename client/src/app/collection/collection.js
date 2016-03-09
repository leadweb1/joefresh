(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.collection', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/collection/collection.html',
            controller: 'CollectionController as collection',
          }
        }
      });
  }

  /**
   * @name  collectionController
   * @description Controller
   */
  function CollectionController($scope) {
    // Local variables
    var _index = 0,
    _coverflow = null,
    _prevLink = null,
    _nextLink = null,
    _albums = [],
    _transformName = Modernizr.prefixed('transform');

    // Constants
    var OFFSET = 70; // pixels
    var ROTATION = 45; // degrees
    var BASE_ZINDEX = 10; // 
    var MAX_ZINDEX = 42; // 

    /**
     * Get selector from the dom
     **/
    function get( selector ) {
        return document.querySelector( selector );
    };

    /**
     * Renders the CoverFlow based on the current _index
     **/
    function render() {

        // loop through albums & transform positions
        for( var i = 0; i < _albums.length; i++ ) {
 
            // before 
            if( i < _index ) {
                _albums[i].style[_transformName] = "translateX( -"+ ( OFFSET * ( _index - i  ) ) +"% ) rotateY( "+ ROTATION +"deg )";
                _albums[i].style.zIndex = BASE_ZINDEX + i;  
            } 

            // current
             if( i === _index ) {
                _albums[i].style[_transformName] = "rotateY( 0deg ) translateZ( 140px )";
                _albums[i].style.zIndex = MAX_ZINDEX;  
            } 

             // after
            if( i > _index ) {
                _albums[i].style[_transformName] = "translateX( "+ ( OFFSET * ( i - _index  ) ) +"% ) rotateY( -"+ ROTATION +"deg )";
                _albums[i].style.zIndex = BASE_ZINDEX + ( _albums.length - i  ); 
            }         
        
        }

    };

    /**
     * Flow to the right
     **/
    function flowRight() {

       // check if has albums 
       // on the right side
       if( _index ) {
            _index--;
            render();
       }
      
    };

    /**
     * Flow to the left
     **/
    function flowLeft() {

        // check if has albums 
       // on the left side
       if( _albums.length > ( _index + 1)  ) {
            _index++;
            render();
       }
      
    };

    /**
     * Enable left & right keyboard events
     **/
    function keyDown( event ) {

        switch( event.keyCode ) {
            case 37: flowRight(); break; // left
            case 39: flowLeft(); break; // right
        }

    };

    /**
     * Register all events 
     **/
    function registerEvents() {
        _prevLink.addEventListener('click', flowRight, false);
        _nextLink.addEventListener('click', flowLeft, false);
        document.addEventListener('keydown', keyDown, false);
    };

    /**
     * Initalize
     **/
    function init() {

        // get albums & set index on the album in the middle
        _albums = Array.prototype.slice.call( document.querySelectorAll( 'section' ));
        _index = Math.floor( _albums.length / 2 );

        // get dom stuff
        _coverflow = get('#coverflow');
        _prevLink = get('#prev');
        _nextLink = get('#next');

        // display covers
        for( var i = 0; i < _albums.length; i++ ) {
            var url = _albums[i].getAttribute("data-cover");
            _albums[i].style.backgroundImage = "url("+ url  +")";
        }

        // do important stuff
        registerEvents();
        render();

   };

    // go!
    init();
   
  }

  angular.module('app.collection', [])
    .config(config)
    .controller('CollectionController', CollectionController);
})();
