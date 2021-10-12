const path = require( 'path' );

// The root directory for the project.
const ROOT_DIR = path.resolve( __dirname, '../' );
// The directory that contains the snippet categories.
const SNIPPET_DATA_DIR = path.join( ROOT_DIR, '/snippet-data/' );
// Where the generated snippets will be saved.
const VSCODE_SNIPPETS_DIR = path.join( ROOT_DIR, '/snippets/' );
// The location of the README.md file.
const README_FILE = path.join( ROOT_DIR, '/README.md' );

// What are the keys that the .snip files can have.
const ALLOWED_DATA_KEYS = [ 'title', 'prefix', 'body', 'description', 'file' ];

// Export all the things
module.exports = {
	ALLOWED_DATA_KEYS,
	ROOT_DIR,
	README_FILE,
	SNIPPET_DATA_DIR,
	VSCODE_SNIPPETS_DIR,
};
