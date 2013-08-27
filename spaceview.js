
;(function (window) {

    function Spaceview (canvasId) {

    	Spaceview.nbStars = 30
    	Spaceview.starSpeed = 8
    	Spaceview.starSize = 1

    	var ctx_
    	, center_ = []
    	, stars_ = []

    	function __construct (canvasId) {
            var canvas = document.getElementById(canvasId)
            if (canvas) {
                ctx_    = canvas.getContext('2d')
                center_['x'] = canvas.width/2
                center_['y'] = canvas.height/2

                while (stars_.length < Spaceview.nbStars) {
                	popStar()
                }

                setInterval(onTick, 25) // start animations

                stars_[0].drawInContext(ctx_)
            } else {
                console.log('No canvas with id: %s', canvasId)
            }
        }  __construct(canvasId);

        function popStar () {
        	var x = center_.x
        	var y = center_.y
        	var speed = Spaceview.starSpeed
        	var star = new Star(x, y, speed)
        	stars_.push(star)
        }

        function onTick () {
        	// TODO
        }

        /**
        * Star class
        *
        */
        function Star (x, y, velocity) {
        	this.x = x
        	this.y = y
        	this.velocity = velocity

        	this.drawInContext = function (ctx) {
        		// Temp draw black BG here
        		ctx.fillStyle = 'black'
        		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        		ctx.fillStyle = 'white'
            	ctx.beginPath()
            	ctx.arc(this.x, this.y, Spaceview.starSize, 0, Math.PI * 2, true)
            	ctx.closePath()
            	ctx.fill()
        	}
        }

	}       

window.Spaceview = Spaceview

}(window));