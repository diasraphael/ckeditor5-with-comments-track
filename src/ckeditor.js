/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Watchdog from '@ckeditor/ckeditor5-watchdog/src/editorwatchdog';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableCellPropertiesEditing from '@ckeditor/ckeditor5-table/src/tablecellproperties/tablecellpropertiesediting';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Comments from '@ckeditor/ckeditor5-comments/src/comments';
import TrackChanges from '@ckeditor/ckeditor5-track-changes/src/trackchanges';
import AutoSave from '@ckeditor/ckeditor5-autosave/src/autosave';
import PendingActions from '@ckeditor/ckeditor5-core/src/pendingactions';

class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Subscript,
	Superscript,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TableProperties,
	TableCellProperties,
	TableCellPropertiesEditing,
	Base64UploadAdapter,
	Highlight,
	Indent,
	IndentBlock,
	Font,
	Alignment,
	Comments,
	TrackChanges,
	AutoSave,
	PendingActions,
	Watchdog
];

const customColorPalette = [
	{
		color: '#28B482',
		label: 'Green'
	},
	{
		color: '#4BBED2',
		label: 'Blue'
	},
	{
		color: '#C9ECF2',
		label: 'Light Blue'
	},
	{
		color: '#FDBB31',
		label: 'Yellow'
	},
	{
		color: '#FEEBC1',
		label: 'Light Orange'
	},
	{
		color: '#EA7F7F',
		label: 'Pink'
	},
	{
		color: '#F8D4D4',
		label: 'Light Pink'
	},
	{
		color: '#FF9866',
		label: 'Brown'
	},
	{
		color: '#FFDDCC',
		label: 'Light Brown'
	},
	{
		color: '#BFE9DA',
		label: 'Ice'
	},
	{
		color: '#A5E1D2',
		label: 'Glory'
	},
	{
		color: '#D2F0E9',
		label: 'Iceberg'
	},
	{
		color: '#E9F8F4',
		label: 'Aqua'
	},
	{
		color: '#F4FBF9',
		label: 'Light Aqua'
	},
	{
		color: '#000000',
		label: 'Black'
	},
	{
		color: '#333333',
		label: 'Lighter Black'
	},
	{
		color: '#4d4d4d',
		label: 'Ash'
	},
	{
		color: '#00343e',
		label: 'Darker Teal'
	},
	{
		color: '#14555a',
		label: 'Dark Teal'
	},
	{
		color: '#007272',
		label: 'Teal'
	},
	{
		color: '#23195a',
		label: 'Blue'
	},
	{
		color: '#6e2382',
		label: 'Purple'
	},
	{
		color: '#DC2A2A',
		label: 'Red'
	},
	{
		color: '#008000',
		label: 'Green'
	}
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'|',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'comment',
			'trackChanges',
			'|',
			'insertTable',
			'imageUpload',
			'blockQuote',
			'highlight',
			'undo',
			'redo',
			'subscript',
			'superscript'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:alignLeft',
			'imageStyle:alignRight'
		]
	},
	fontColor: {
		colors: customColorPalette
	},
	fontBackgroundColor: {
		colors: customColorPalette
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
			'tableCellProperties'
		],
		// Set the palettes for tables.
		tableProperties: {
			borderColors: customColorPalette,
			backgroundColors: customColorPalette
		},

		// Set the palettes for table cells.
		tableCellProperties: {
			borderColors: customColorPalette,
			backgroundColors: customColorPalette
		}
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

export default { ClassicEditor, Watchdog };
