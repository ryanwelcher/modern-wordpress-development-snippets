# Modern WordPress Development Snippets

VSCode snippets for modern WordPress development and [Gutenberg](https://wordpress.org/gutenberg/). This is by no means an exhaustive list. It's mostly the items I use during my [live streams](https://www.twitch.tv/ryanwelchercodes) and random projects

## Props

This project was heavily inspired by the [wordpress-components-snippets](https://github.com/ItsJonQ/wordpress-components-snippets) extension and steals the same approach to managing and building the snippets. Thanks to [Q](https://github.com/ItsJonQ/) for the groundwork!

## Installation

1. Clone the repo `git clone git@github.com:ryanwelcher/gutenberg-snippets.git`
2. Install dependencies `npm install`
3. Generate the snippets `npm run generate`
4. Package the extension `npm run package`
5. Install the package `npm run load` **You need to have the `code` command line tool installed** [See here for instructions](https://code.visualstudio.com/docs/setup/setup-overview)
6. Reload VSCode.

Note that components that are marked as deprecated or experimental are not included in the snippets.

<!-- SNIPPET-TOC -->
<!-- This table was automatically generated -->
## Snippets
 ### block-editor
| Name | Snippet(s) | Description |
| --- | --- | --- |
| InspectorControls | `rw`,`wp_blockEditor`,`InspectorControls` | InspectorControls |
| RichText.Content | `rw`,`wp_blockEditor`,`block-editor`,`RichText` | RichText.Content |
| RichText | `rw`,`wp_blockEditor`,`block-editor`,`RichText` | RichText |

 ### blocks
| Name | Snippet(s) | Description |
| --- | --- | --- |
| getCategories | `rw`,`wp_blocks`,`getCategories` | getCategories |
| setCategories | `rw`,`wp_blocks`,`setCategories` | setCategories |
| setDefaultBlockName | `rw`,`wp_blocks`,`setDefaultBlockName` | setDefaultBlockName |

 ### components
| Name | Snippet(s) | Description |
| --- | --- | --- |
| Alignment Matrix Control | `rw`,`wp_components`,`components`,`AlignmentMatrixControl` | Alignment Matrix Control |
| AnglePickerControl | `rw`,`wp_components`,`components`,`AnglePickerControl` | AnglePickerControl |
| Animate | `rw`,`wp_components`,`components`,`Animate` | Animate |
| Autocomplete | `rw`,`wp_components`,`components`,`Autocomplete` | Autocomplete |
| BaseControl | `rw`,`wp_components`,`components`,`BaseControl` | BaseControl |
| ButtonGroup | `rw`,`wp_components`,`components`,`ButtonGroup` | ButtonGroup |
| Button | `wp.components`,`components`,`Button` | Button |
| CheckboxControl | `wp.components`,`components`,`CheckboxControl` | CheckboxControl |
| ColorIndicator | `wp.components`,`components`,`ColorIndicator` | ColorIndicator |
| ColorPalette | `wp.components`,`components`,`ColorPalette` | ColorPalette |
| ColorPicker | `wp.components`,`components`,`ColorPicker` | ColorPicker |
| ComboboxControl | `wp.components`,`components`,`ComboboxControl` | ComboboxControl |
| CustomSelectControl | `wp.components`,`components`,`CustomSelectControl` | CustomSelectControl |
| Dashicon | `wp.components`,`components`,`Dashicon` | Dashicon |
| DateTimePicker | `wp.components`,`components`,`DateTimePicker` | DateTimePicker |
| Disabled | `wp.components`,`components`,`Disabled` | Disabled |
| Draggable | `wp.components`,`components`,`Draggable` | Draggable |
| DropdownMenu | `wp.components`,`components`,`DropdownMenu` | DropdownMenu |
| Dropdown | `wp.components`,`components`,`Dropdown` | Dropdown |
| Dropzone | `wp.components`,`components`,`Dropzone` | Dropzone |
| DuotonePicker & DuotoneSwatch | `wp.components`,`components`,`DuotonePicker`,`DuotoneSwatch` | DuotonePicker & DuotoneSwatch |
| ExternalLink | `wp.components`,`components`,`ExternalLink` | ExternalLink |
| FocalPointPicker | `wp.components`,`components`,`FocalPointPicker` | FocalPointPicker |
| FontSizePicker | `wp.components`,`components`,`FontSizePicker` | FontSizePicker |
| FormFileUpload | `wp.components`,`components`,`FormFileUpload` | FormFileUpload |
| FormToggle | `wp.components`,`components`,`FormToggle` | FormToggle |
| FormTokenField | `wp.components`,`components`,`FormTokenField` | FormTokenField |
| Guide | `wp.components`,`components`,`Guide` | Guide |
| PanelBody | `rw`,`wp_components`,`PanelBody` | PanelBody |

 ### core-data
| Name | Snippet(s) | Description |
| --- | --- | --- |
| getCurrentUser | `rw`,`wp_coreData`,`getCurrentUser` | getCurrentUser |

 ### data
| Name | Snippet(s) | Description |
| --- | --- | --- |
| getEmbedPreview | `rw`,`wp_data`,`getEmbedPreview` | getEmbedPreview |

 ### json
| Name | Snippet(s) | Description |
| --- | --- | --- |
| Generate block.json file | `rw`,`wp`,`json`,`block` | Generate block.json file |
| Generate a basic theme.json file | `rw`,`wp`,`json`,`theme` | Generate a basic theme.json file |

 ### notices
| Name | Snippet(s) | Description |
| --- | --- | --- |
| createErrorNotice | `rw`,`wp_notices`,`createErrorNotice` | createErrorNotice |
| createInfoNotice | `rw`,`wp_notices`,`wp_data`,`createInfoNotice` | createInfoNotice |
| createNotice | `rw`,`wp_notices`,`wp_data`,`createNotice` | createNotice |
| createSuccessNotice | `rw`,`wp_notices`,`wp_data`,`createSuccessNotice` | createSuccessNotice |
| createWarningNotice | `rw`,`wp_notices`,`wp_data`,`createWarningNotice` | createWarningNotice |
| getNotices | `rw`,`wp_notices`,`wp_data`,`getNotices` | getNotices |
| removeNotice | `rw`,`wp_notices`,`wp_data`,`removeNotice` | removeNotice |

 ### php
| Name | Snippet(s) | Description |
| --- | --- | --- |
| Insert WordPress debug constants | `rw`,`wp`,`debug` | Insert WordPress debug constants |
| Enqueue a viewScript file | `rw`,`wp`,`enqueue`,`viewScript` | Enqueue a viewScript file |

 ### structure
| Name | Snippet(s) | Description |
| --- | --- | --- |
| Block Edit component | `rw`,`block`,`edit` | Block Edit component |
| Block Save component | `rw`,`block`,`save` | Block Save component |
| Retrieve from the WordPress datastore | `rw`,`wp`,`getEntityRecords`,`get-data` | Retrieve from the WordPress datastore |

 ### webpack
| Name | Snippet(s) | Description |
| --- | --- | --- |
| Custom entry points | `rw`,`webpack`,`entrypoints` | Custom entry points |


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

<AlignmentMatrixControl value={ alignment } onChange={ setAlignment } />;
```
