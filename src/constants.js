const path = require('path');

// The root directory for the project.
const ROOT_DIR = path.resolve(__dirname, '../');
// The directory that contains the snippet categories.
const SNIPPET_DATA_DIR = path.join(ROOT_DIR, '/snippet-data/');
// Where the generated snippets will be saved.
const VSCODE_SNIPPETS_DIR = path.join( ROOT_DIR, '/snippets/' );

module.exports = {
    ROOT_DIR,
    SNIPPET_DATA_DIR,
    VSCODE_SNIPPETS_DIR
}