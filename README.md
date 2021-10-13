# Gutenberg Snippets

VSCode snippets for [Gutenberg](https://wordpress.org/gutenberg/) development. This project was heavily inspired by the [wordpress-components-snippets](https://github.com/ItsJonQ/wordpress-components-snippets) extension and steals the same approach to managing and building the snippets. Thanks to [Q](https://github.com/ItsJonQ/) for the groundwork!

Note that components that are marked as deprecated or experimental are not included in the snippets.

<!-- SNIPPET-TOC -->
<!-- This table was automatically generated -->
## Snippets
 ### block-editor
| Snippet(s) | Title |
| --- | --- |
| `wp.blockEditor`,`block-editor`,`RichText` | RichText |

 ### components
| Snippet(s) | Title |
| --- | --- |
| `wp.components`,`components`,`AlignmentMatrixControl` | Alignment Matrix Control |
| `wp.components`,`components`,`AnglePickerControl` | AnglePickerControl |
| `wp.components`,`components`,`Animate` | Animate |
| `wp.components`,`components`,`Autocomplete` | Autocomplete |
| `wp.components`,`components`,`BaseControl` | BaseControl |
| `wp.components`,`components`,`ButtonGroup` | ButtonGroup |
| `wp.components`,`components`,`Button` | Button |
| `wp.components`,`components`,`CheckboxControl` | CheckboxControl |
| `wp.components`,`components`,`ColorIndicator` | ColorIndicator |
| `wp.components`,`components`,`ColorPalette` | ColorPalette |
| `wp.components`,`components`,`ColorPicker` | ColorPicker |
| `wp.components`,`components`,`ComboboxControl` | ComboboxControl |
| `wp.components`,`components`,`CustomSelectControl` | CustomSelectControl |
| `wp.components`,`components`,`Dashicon` | Dashicon |
| `wp.components`,`components`,`DateTimePicker` | DateTimePicker |
| `wp.components`,`components`,`Disabled` | Disabled |
| `wp.components`,`components`,`Draggable` | Draggable |
| `wp.components`,`components`,`DropdownMenu` | DropdownMenu |
| `wp.components`,`components`,`Dropdown` | Dropdown |
| `wp.components`,`components`,`Dropzone` | Dropzone |
| `wp.components`,`components`,`DuotonePicker`,`DuotoneSwatch` | DuotonePicker & DuotoneSwatch |
| `wp.components`,`components`,`ExternalLink` | ExternalLink |
| `wp.components`,`components`,`FocalPointPicker` | FocalPointPicker |
| `wp.components`,`components`,`FontSizePicker` | FontSizePicker |
| `wp.components`,`components`,`FormFileUpload` | FormFileUpload |
| `wp.components`,`components`,`FormToggle` | FormToggle |
| `wp.components`,`components`,`FormTokenField` | FormTokenField |
| `wp.components`,`components`,`Guide` | Guide |

 ### json
| Snippet(s) | Title |
| --- | --- |
| `wp`,`json`,`block` | Generate block.json file |

 ### php
| Snippet(s) | Title |
| --- | --- |
| `wp`,`debug` | Insert WordPress debug constants |

 ### structure
| Snippet(s) | Title |
| --- | --- |
| `block`,`edit` | Block Edit component |
| `block`,`save` | Block Save component |
| `wp`,`getEntityRecords`,`get-data` | Retrieve from the WordPress datastore |


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
