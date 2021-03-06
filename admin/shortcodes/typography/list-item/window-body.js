/**
 * [shortcode attrs]...[/shortcode]
 * [list-item bg= href= format= active=active xclass=]content[/list-item]
 */
var developry_bs4_shortcode_list_item = [
	{ 
		label     : 'Content', 
		type      : 'textbox',  
		name      : 'content', 
		value     : '',
		multiline : true,
		rows      : 8,
	},
	{ 
		label : 'Local or external link URL', 
		type  : 'textbox',  
		name  : 'href', 
		value : '', 
	},
	{ 
		label : 'Background color', 
		type  : 'listbox', 
		name  : 'bg', 
		values: [ 
			{ 
				text  : 'unset', 
				value : '',
			},
			{ 
				text  : 'primary', 
				value : 'primary' ,
			},
			{ 
				text  : 'secondary', 
				value : 'secondary',
			},
			{ 
				text  : 'dark', 
				value : 'dark',
			},
			{ 
				text  : 'light', 
				value : 'light',
			},
			{ 
				text  : 'danger', 
				value : 'danger',
			},
			{ 
				text  : 'info', 
				value : 'info',
			},
			{ 
				text  : 'success', 
				value : 'success',
			},
			{ 
				text  : 'warning', 
				value : 'warning',
			},
		],
	},
	{ 
		label : 'List format', 
		type  : 'listbox', 
		name  : 'format', 
		values: [ 
			{ 
				text  : 'unset', 
				value : '',
			},
			{ 
				text  : 'inlined', 
				value : 'inline', 
			},
			{ 
				text  : 'grouped', 
				value : 'group',
			},
		],
	},
	{ 
		label : 'Is it active?', 
		type  : 'listbox', 
		name  : 'active', 
		values: 
		[
			{ 
				text  : 'no', 
				value : '' 
			},
			{ 
				text  : 'yes', 
				value : 'active',
			},
		],
	},
	{ 
		label : 'Additional classes (separated by space)', 
		type  : 'textbox', 
		name  : 'xclass', 
		value : '', 
	},
	{ 
		label : 'Shortcode', 
		type  : 'listbox', 
		name  : 'shortcode', 
		values: [ 
			{ 
				text  : 'list-item', 
				value : 'list-item', 
			}, 
		], 
	},
];
