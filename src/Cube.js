import React, { Component } from 'react';
import words from 'random-words';
import * as THREE from 'three';
require('TrackballControls.js');
require('CSS3DRenderer.js');


class Cube extends Component {
    render() {
      console.log(words(5));
      var camera, scene, renderer;
			var controls;
			var Element = function ( id, x, y, z, ry ) {
				var div = document.createElement( 'div' );
				div.style.width = '480px';
				div.style.height = '360px';
				div.style.backgroundColor = '#000';
				var iframe = document.createElement( 'iframe' );
				iframe.style.width = '480px';
				iframe.style.height = '360px';
				iframe.style.border = '0px';
				iframe.src = [ 'https://www.youtube.com/embed/', id, '?rel=0' ].join( '' );
				div.appendChild( iframe );
				var object = new THREE.CSS3DObject( div );
				object.position.set( x, y, z );
				object.rotation.y = ry;
				return object;
			};
			function init() {
				var container = document.getElementById( 'container' );
				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 5000 );
				camera.position.set( 500, 350, 750 );
				scene = new THREE.Scene();
				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
				var group = new THREE.Group();
				group.add( new Element( 'SJOz3qjfQXU', 0, 0, 240, 0 ) );
				group.add( new Element( 'Y2-xZ-1HE-Q', 240, 0, 0, Math.PI / 2 ) );
				group.add( new Element( 'IrydklNpcFI', 0, 0, - 240, Math.PI ) );
				group.add( new Element( '9ubytEsCaS0', - 240, 0, 0, - Math.PI / 2 ) );
				scene.add( group );
				controls = new THREE.TrackballControls( camera );
				controls.rotateSpeed = 4;
				window.addEventListener( 'resize', onWindowResize, false );
				// Block iframe events when dragging camera
				var blocker = document.getElementById( 'blocker' );
				blocker.style.display = 'none';
				document.addEventListener( 'mousedown', function () {
					blocker.style.display = '';
				} );
				document.addEventListener( 'mouseup', function () {
					blocker.style.display = 'none';
				} );
			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			function animate() {
				requestAnimationFrame( animate );
				controls.update();
				renderer.render( scene, camera );
			}
      return (
        
        <div id="container">dsaf</div>,
		<div id="blocker"></div>,
        init(),
        animate()
        );
    }
  }
  
  export default Cube;
  