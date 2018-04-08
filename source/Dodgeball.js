//

"use strict"

import AFRAME from "aframe"

import "./Projectile.js"


AFRAME.registerComponent( "dodgeball", {
	schema: {
		color: { default: 'red' }
	},

	init: function () {
		console.log( "initttt", this.el.getAttribute )
		var data = this.data
		var el = this.el
		const defaultColor = this.el.getAttribute( "material" )
		// var defaultColor = el.getAttribute( 'material' ).color

		for ( let i = 0; i < 10; i++ ) {
			const projectile = document.createElement( "a-entity" )
			projectile.setAttribute( "projectile", "" )
			this.el.appendChild( projectile )
		}
	}
} )
