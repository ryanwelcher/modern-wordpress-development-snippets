# Gutenberg Snippets

VSCode snippets for [Gutenberg](https://wordpress.org/gutenberg/) development. This project was heavily inspired by the [wordpress-components-snippets](https://github.com/ItsJonQ/wordpress-components-snippets) extension and steals the same approach to managing and building the snippets. Thanks to [Q](https://github.com/ItsJonQ/) for the groundwork!

Note that components that are marked as deprecated or experimental are not included in the snippets.

<!-- SNIPPET-TOC -->
<!-- This table was automatically generated -->
## Snippets
 ### block-editor
| Snippet(s) | Description |
| --- | --- |
| `wp.blockEditor`,`block-editor`,`RichText` | Inserts a RichText component. |

 ### components
| Snippet(s) | Description |
| --- | --- |
| `wp.components`,`components`,`AlignmentMatrixControl` | AlignmentMatrixControl components enable adjustments to horizontal and vertical alignments for UI. |
| `wp.components`,`components`,`AnglePickerControl` | AnglePickerControl is a React component to render a UI that allows users to pick an angle. Users can choose an angle in a visual UI with the mouse by dragging an angle indicator inside a circle or by directly inserting the desired angle in a text field. |
| `wp.components`,`components`,`Animate` | Simple interface to introduce animations to components. |
| `wp.components`,`components`,`Autocomplete` | This component is used to provide autocompletion support for a child input component. |
| `wp.components`,`components`,`BaseControl` | BaseControl component is used to generate labels and help text for components handling user inputs. |
| `wp.components`,`components`,`ButtonGroup` | ButtonGroup can be used to group any related buttons together. To emphasize related buttons, a group should share a common container. |
| `wp.component`,`component`,`Button` | Buttons let users take actions and make choices with a single click or tap. |
| `wp.components`,`components`,`CheckboxControl` | Checkboxes allow the user to select one or more items from a set. |
| `wp.components`,`components`,`ColorIndicator` | Displays a color. |
| `wp.components`,`components`,`ColorPalette` | Display a color palette |
| `wp.components`,`components`,`ColorPicker` | ColorPicker is a color picking component based on react-colorful. It lets you pick a color visually or by manipulating the individual RGB(A), HSL(A) and Hex(8) color values. |
| `wp.components`,`components`,`ComboboxControl` | ComboboxControl is an enhanced version of a SelectControl, with the addition of being able to search for options using a search input. |
| `wp.components`,`components`,`CustomSelectControl` | CustomSelectControl allows users to select an item from a single-option menu just like SelectControl, with the addition of being able to provide custom styles for each item in the menu. This means it does not use a native <select>, so should only be used if the custom styling is necessary. |
| `wp.components`,`components`,`Dashicon` | add description |
| `wp.components`,`components`,`DateTimePicker` | DateTimePicker is a React component that renders a calendar and clock for date and time selection. The calendar and clock components can be accessed individually using the DatePicker and TimePicker components respectively. |
| `wp.components`,`components`,`Disabled` | Disabled is a component which disables descendant tabbable elements and prevents pointer interaction. |
| `wp.components`,`components`,`Draggable` | Draggable is a Component that provides a way to set up a a cross-browser (including IE) customisable drag image and the transfer data for the drag event. It decouples the drag handle and the element to drag. Use it by wrapping the component that will become the drag handle and providing the DOM ID of the element to drag. |
| `wp.components`,`components`,`DropdownMenu` | The DropdownMenu displays a list of actions (each contained in a MenuItem, MenuItemsChoice, or MenuGroup) in a compact way. It appears in a Popover after the user has interacted with an element (a button or icon) or when they perform a specific action. |
| `wp.components`,`components`,`Dropdown` | Dropdown is a React component to render a button that opens a floating content modal when clicked. |
| `wp.components`,`components`,`Dropzone` | DropZone is a Component creating a drop zone area taking the full size of its parent element. It supports dropping files, HTML content or any other HTML drop event. |
| `wp.components`,`components`,`DuotonePicker`,`DuotoneSwatch` | add description |
| `wp.components`,`components`,`ExternalLink` | add description |
| `wp.components`,`components`,`FocalPointPicker` | Focal Point Picker is a component which creates a UI for identifying the most important visual point of an image. |
| `wp.components`,`components`,`FontSizePicker` | FontSizePicker is a React component that renders a UI that allows users to select a font size |
| `wp.components`,`components`,`FormFileUpload` | Renders a FormFileUpload |
| `wp.components`,`components`,`FormToggle` | Renders a FormToggle |
| `wp.components`,`components`,`FormTokenField` | A FormTokenField is a field similar to the tags and categories fields in the interim editor chrome, or the "to" field in Mail on OS X. Tokens can be entered by typing them or selecting them from a list of suggested tokens. |
| `wp.components`,`components`,`Guide` | Guide is a React component that renders a user guide in a modal. |

 ### json
| Snippet(s) | Description |
| --- | --- |
| `wp`,`json`,`block` | Generates the contents of a block.json file |

 ### php
| Snippet(s) | Description |
| --- | --- |
| `wp`,`debug` | Inserts the WP_DEBUG and WP_DEBUG_LOG and other debug related constants. |

 ### structure
| Snippet(s) | Description |
| --- | --- |
| `block`,`edit` | Create an Edit component for custom block development. |
| `block`,`save` | Create a Save component for custom block development. |
| `wp`,`getEntityRecords`,`get-data` | Add getEntityRecords selector with isLoading and invalidateResolution. |


<!-- /SNIPPET-TOC -->

## Development
1. Install the dependencies: `npm install`
2. DO WORK!
3. Generate the updated snippets: `npm run generate`

The snippets are stored in the snippet-data directory in a subdirectory that corresponds to the snippet's category. For example, the components that are part of the `@wordpress/components` package are stored in the `components` directory, PHP related snippets are stored in the `php` directory and so on.

To add a new snippet category, simply add a new directory to the snippet-data directory and update the package.json file to include the new category to the `contributes.snippets` array.

To add a new snippet to any category, create a new file called {snippet}.snip. Please use a name that makes it clear what the snippet represents. For example, a snippet for the `<Button />` component would be named `button.snip`.

Once the file has been created, there is a custom snippet for the workspace that will automatically add the snippet to the snippet file. Trigger it by typing `snip` in the new file. Please use this scaffold as a starting point to keep the format consistent.

The .snip files use front-matter to store the data about the snippet

Raw snippet file:
```plaintext
---
title: Alignment Matrix Control
prefix: wp.components|AlignmentMatrixControl
description: AlignmentMatrixControl components enable adjustments to horizontal and vertical alignments for UI.
---

$LINE_COMMENT Reference: https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/alignment-matrix-control",

import { AlignmentMatrixControl } from '@wordpress/components';

<AlignmentMatrixControl value={ alignment } onChange={ setAlignment } />
```

Converts to in snippet file:
```json
"Alignment Matrix Control": {
    "prefix": [
      "wp.components",
      "AlignmentMatrixControl"
    ],
    "description": "AlignmentMatrixControl components enable adjustments to horizontal and vertical alignments for UI.",
    "body": [
      "$LINE_COMMENT Reference: https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/alignment-matrix-control\",",
      "",
      "import { AlignmentMatrixControl } from '@wordpress/components';",
      "",
      "<AlignmentMatrixControl value={ alignment } onChange={ setAlignment } />"
    ]
},
```
Note that the prefix is pipe-delimited and is converted to an array in the json.


Inserted Snippet:
```jsx
// Reference: https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/alignment-matrix-control",

import { AlignmentMatrixControl } from '@wordpress/components';

<AlignmentMatrixControl value={ alignment } onChange={ setAlignment } />
```
