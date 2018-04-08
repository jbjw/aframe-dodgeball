//

"use strict"

import AFRAME from "aframe"

AFRAME.registerComponent( "projectile", {
	schema: {
		color: { default: 'red' }
	},

	init: function () {
		console.log( "proj" )
		const data = this.data
		const el = this.el
		// const defaultColor = el.getAttribute( 'material' ).color

		el.id = "aprojectile"
		el.setAttribute( "geometry", "primitive: box; width: 1; height: 1; depth: 1")
		el.object3D.position.set( (Math.random() - 0.5 ) * 20, 2 + Math.random() * 4, (Math.random() - 0.5 ) * 20 )


		el.setAttribute( "dynamic-body", "mass: 10" )

		el.addEventListener( 'mouseenter', function () {
			// el.parentNode.removeChild( el )
			// el.setAttribute( 'color', data.color )
		} )

		el.addEventListener( 'click', function () {
			// el.parentNode.removeChild( el )
			el.body.applyImpulse
			el.body.applyImpulse(
				new CANNON.Vec3(0, 1, -1),
				new CANNON.Vec3().copy( el.getComputedAttribute('position') )
			)
			// el.setAttribute( 'color', data.color )
		} )

		el.addEventListener( 'mouseleave', function () {
			// el.setAttribute( 'color', defaultColor )
		} )
	}
} )
