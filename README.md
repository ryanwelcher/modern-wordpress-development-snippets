# Gutenberg Snippets

VSCode snippets for [Gutenberg](https://wordpress.org/gutenberg/) development. This project was heavily inspired by [https://github.com/ItsJonQ/wordpress-components-snippets] and steals the same approach to managing and building the snippets.


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
<!-- SNIPPET-TOC -->
<!-- This table was automatically generated -->
## Snippets
 ### block-editor
| Snippet(s) | Description |
| --- | --- |
| ``richtext`,`text`` | Inserts a RichText component. |

 ### components
| Snippet(s) | Description |
| --- | --- |
| ``wp.components`,`AlignmentMatrixControl`` | AlignmentMatrixControl components enable adjustments to horizontal and vertical alignments for UI. |
| ``wp.components`,`AnglePickerControl`` | AnglePickerControl is a React component to render a UI that allows users to pick an angle. Users can choose an angle in a visual UI with the mouse by dragging an angle indicator inside a circle or by directly inserting the desired angle in a text field. |
| ``wp.components`,`Animate`` | Simple interface to introduce animations to components. |
| ``wp.components`,`Autocomplete`` | This component is used to provide autocompletion support for a child input component. |
| ``wp.components`,`BaseControl`` | BaseControl component is used to generate labels and help text for components handling user inputs. |
| ``wp.components`,`ButtonGroup`` | ButtonGroup can be used to group any related buttons together. To emphasize related buttons, a group should share a common container. |

 ### json
| Snippet(s) | Description |
| --- | --- |
| ``wp`,`json`,`block`` | Generates the contents of a block.json file |

 ### php
| Snippet(s) | Description |
| --- | --- |
| ``wp`,`debug`` | Inserts the WP_DEBUG and WP_DEBUG_LOG and other debug related constants. |

 ### structure
| Snippet(s) | Description |
| --- | --- |
| ``block`,`edit`` | Create an Edit component for custom block development. |
| ``block`,`save`` | Create a Save component for custom block development. |
| ``wp`,`getEntityRecords`,`get-data`` | Add getEntityRecords selector with isLoading and invalidateResolution. |


<!-- /SNIPPET-TOC -->
