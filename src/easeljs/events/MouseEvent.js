/*
* MouseEvent
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @module EaselJS
 */

// namespace:
this.createjs = this.createjs||{};

(function() {
	"use strict";

// TODO: deprecated. @uses EventDispatcher
/**
 * This is passed as the parameter to all mouse/pointer/touch related events. For a listing of mouse events, see
 * {{#crossLink "DisplayObject"}}{{/crossLink}} and {{#crossLink "Stage"}}{{/crossLink}}.
 * instances.
 *
 * Currently, DisplayObjects support:
 * <ul>
 *     <li>{{#crossLink "DisplayObject/click:event"}}{{/crossLink}}: The user presses and releases the mouse</li>
 *     <li>{{#crossLink "DisplayObject/dblclick:event"}}{{/crossLink}}: The user double clicks</li>
 *     <li>{{#crossLink "DisplayObject/mousedown:event"}}{{/crossLink}}: The user presses the mouse</li>
 *     <li>{{#crossLink "DisplayObject/mouseout:event"}}{{/crossLink}}: The user moves the mouse out of an object</li>
 *     <li>{{#crossLink "DisplayObject/mouseover:event"}}{{/crossLink}}: The user moves the mouse over and object</li>
 *     <li>{{#crossLink "DisplayObject/pressmove:event"}}{{/crossLink}}: The user presses the mouse, then moves it</li>
 *     <li>{{#crossLink "DisplayObject/pressup:event"}}{{/crossLink}}: The user releases the mouse, either over, or outside of the object</li>
 *     <li>{{#crossLink "DisplayObject/rollout:event"}}{{/crossLink}}: The user rolls out of a child element</li>
 *     <li>{{#crossLink "DisplayObject/rollover:event"}}{{/crossLink}}: The user rolls over a child element</li>
 * </ul>
 *
 * For a full overview of the mouse events, and their properties, please check out the {{#crossLink "DisplayObject"}}{{/crossLink}}
 * event listing.
 * @class MouseEvent
 * @param {String} type The event type.
 * @param {Boolean} bubbles Indicates whether the event will bubble through the display list.
 * @param {Boolean} cancelable Indicates whether the default behaviour of this event can be cancelled.
 * @param {Number} stageX The normalized x position relative to the stage.
 * @param {Number} stageY The normalized y position relative to the stage.
 * @param {MouseEvent} nativeEvent The native DOM event related to this mouse event.
 * @param {Number} pointerID The unique id for the pointer.
 * @param {Boolean} primary Indicates whether this is the primary pointer in a multitouch environment.
 * @param {Number} rawX The raw x position relative to the stage.
 * @param {Number} rawY The raw y position relative to the stage.
 * @extends Event
 * @uses EventDispatcher
 * @constructor
 **/
var MouseEvent = function(type, bubbles, cancelable, stageX, stageY, nativeEvent, pointerID, primary, rawX, rawY) {
	this.initialize(type, bubbles, cancelable, stageX, stageY, nativeEvent, pointerID, primary, rawX, rawY);
};
var p = MouseEvent.prototype = new createjs.Event();

// events:

	/**
	 * For MouseEvent objects of type "mousedown", mousemove events will be dispatched from the event object until the
	 * user releases the mouse anywhere. This enables you to listen to mouse move interactions for the duration of a
	 * press, which can be very useful for operations such as drag and drop.
	 *
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class description for a listing of event properties.
	 * @event mousemove
	 * @since 0.6.0
	 * @deprecated In favour of the DisplayObject "pressmove" event.
	 */

	/**
	 * For MouseEvent objects of type "mousedown", a mouseup event will be dispatched from the event object when the
	 * user releases the mouse anywhere. This enables you to listen for a corresponding mouse up from a specific press,
	 * which can be very useful for operations such as drag and drop.
	 *
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class description for a listing of event properties.
	 * @event mouseup
	 * @since 0.6.0
	 * @deprecated In favour of the DisplayObject "pressup" event.
	 */

// public properties:

	/**
	 * The normalized x position on the stage. This will always be within the range 0 to stage width.
	 * @property stageX
	 * @type Number
	*/
	p.stageX = 0;

	/**
	 * The normalized y position on the stage. This will always be within the range 0 to stage height.
	 * @property stageY
	 * @type Number
	 **/
	p.stageY = 0;

	/**
	 * The raw x position relative to the stage. Normally this will be the same as the stageX value, unless
	 * stage.mouseMoveOutside is true and the pointer is outside of the stage bounds.
	 * @property rawX
	 * @type Number
	*/
	p.rawX = 0;

	/**
	 * The raw y position relative to the stage. Normally this will be the same as the stageY value, unless
	 * stage.mouseMoveOutside is true and the pointer is outside of the stage bounds.
	 * @property rawY
	 * @type Number
	*/
	p.rawY = 0;

	/**
	 * The native MouseEvent generated by the browser. The properties and API for this
	 * event may differ between browsers. This property will be null if the
	 * EaselJS property was not directly generated from a native MouseEvent.
	 * @property nativeEvent
	 * @type HtmlMouseEvent
	 * @default null
	 **/
	p.nativeEvent = null;

	// TODO: deprecated:
	/**
	 * REMOVED. Use the {{#crossLink "DisplayObject"}}{{/crossLink}} {{#crossLink "DisplayObject/pressmove:event"}}{{/crossLink}}
	 * event.
	 * @property onMouseMove
	 * @type Function
	 * @deprecated Use the DisplayObject "pressmove" event.
	 */
	/**
	 * REMOVED. Use the {{#crossLink "DisplayObject"}}{{/crossLink}} {{#crossLink "DisplayObject/pressup:event"}}{{/crossLink}}
	 * event.
	 * @property onMouseUp
	 * @type Function
	 * @deprecated Use the DisplayObject "pressup" event.
	 */

	/**
	 * The unique id for the pointer (touch point or cursor). This will be either -1 for the mouse, or the system
	 * supplied id value.
	 * @property pointerID
	 * @type {Number}
	 */
	p.pointerID = 0;

	/**
	 * Indicates whether this is the primary pointer in a multitouch environment. This will always be true for the mouse.
	 * For touch pointers, the first pointer in the current stack will be considered the primary pointer.
	 * @property primary
	 * @type {Boolean}
	 */
	p.primary = false;

// mix-ins:
	// EventDispatcher methods:
	// TODO: deprecated:
	p.addEventListener = null;
	p.removeEventListener = null;
	p.removeAllEventListeners = null;
	p.dispatchEvent = null;
	p.hasEventListener = null;
	p._listeners = null;
	createjs.EventDispatcher.initialize(p); // inject EventDispatcher methods.

// constructor:
	/**
	 * @property Event_initialize
	 * @private
	 * @type Function
	 **/
	p.Event_initialize = p.initialize;

	/**
	 * Initialization method.
	 * @method initialize
	 * @param {String} type The event type.
	 * @param {Boolean} bubbles Indicates whether the event will bubble through the display list.
	 * @param {Boolean} cancelable Indicates whether the default behaviour of this event can be cancelled.
	 * @param {Number} stageX The normalized x position relative to the stage.
	 * @param {Number} stageY The normalized y position relative to the stage.
	 * @param {MouseEvent} nativeEvent The native DOM event related to this mouse event.
	 * @param {Number} pointerID The unique id for the pointer.
	 * @param {Boolean} primary Indicates whether this is the primary pointer in a multitouch environment.
	 * @param {Number} rawX The raw x position relative to the stage.
	 * @param {Number} rawY The raw y position relative to the stage.
	 * @protected
	 **/
	p.initialize = function(type, bubbles, cancelable, stageX, stageY, nativeEvent, pointerID, primary, rawX, rawY) {
		this.Event_initialize(type, bubbles, cancelable);
		this.stageX = stageX;
		this.stageY = stageY;
		this.nativeEvent = nativeEvent;
		this.pointerID = pointerID;
		this.primary = primary;
		this.rawX = (rawX==null)?stageX:rawX;
		this.rawY = (rawY==null)?stageY:rawY;
	};

// public methods:
	/**
	 * Returns a clone of the MouseEvent instance.
	 * @method clone
	 * @return {MouseEvent} a clone of the MouseEvent instance.
	 **/
	p.clone = function() {
		return new MouseEvent(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.target, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY);
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]";
	};

createjs.MouseEvent = MouseEvent;
}());
