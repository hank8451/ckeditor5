/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module ui/list/listitemview
 */

import View from '../view';
import Template from '../template';

/**
 * The list item view class.
 *
 * @extends module:ui/view~View
 */
export default class ListItemView extends View {
	/**
	 * @inheritDoc
	 */
	constructor() {
		super();

		/**
		 * Controls the `tabindex` attribute of the item.
		 *
		 * @observable
		 * @default -1
		 * @member {String} #tabindex
		 */
		this.set( 'tabindex', -1 );

		const bind = this.bindTemplate;

		this.template = new Template( {
			tag: 'li',

			attributes: {
				class: [
					'ck-list__item',
					bind.to( 'class' )
				],
				style: bind.to( 'style' ),
				tabindex: bind.to( 'tabindex' )
			},

			children: [
				{
					text: bind.to( 'label' )
				}
			],

			on: {
				click: bind.to( 'execute' )
			}
		} );

		/**
		 * The label of the list item.
		 *
		 * @observable
		 * @member {String} #label
		 */

		/**
		 * (Optional) The DOM style attribute of the list item.
		 *
		 * @observable
		 * @member {String} #style
		 */

		/**
		 * (Optional) The additional class set on the {@link #element}.
		 *
		 * @observable
		 * @member {String} #class
		 */

		/**
		 * Fired when the list item has been clicked.
		 *
		 * @event #execute
		 */
	}

	/**
	 * Focuses the list item.
	 */
	focus() {
		this.element.focus();
	}
}
