const fs = require( 'fs' );
const path = require( 'path' );
const glob = require( 'glob' );
const matter = require( 'gray-matter' );
const { SNIPPET_DATA_DIR, VSCODE_SNIPPETS_DIR } = require( './constants' );

async function generateSnippets() {
	const snippetDirs = await getSnippetDirectories();
	snippetDirs.map( async ( dir ) => {
		const data = await getSnippetData( dir );
		const snippetData = data.reduce( ( map, item ) => {
			const { title, description, body, prefix } = item;
			map[ title ] = {
				prefix,
				description,
				body,
			};
			return map;
		}, {} );
		const content = JSON.stringify( snippetData, null, 2 );

		fs.writeFile(
			path.join( VSCODE_SNIPPETS_DIR + path.basename( dir ) + '.json' ),
			content,
			( err ) => {
				if ( err ) {
					// eslint-disable-next-line no-console
					console.log( err );
				}
			}
		);
	} );
}

async function getSnippetData( dir ) {
	const files = glob.sync( dir + '/*.snip' );
	const snippets = files.map( ( file ) => {
		const fileContent = fs.readFileSync( file, 'utf-8' );
		const markdownData = matter( fileContent );
		const {
			content: originalContent,
			data: { prefix: originalPrefix, ...restOfData },
		} = markdownData;
		const body = originalContent.trim().split( '\n' );
		const prefix = originalPrefix.split( '|' );

		return {
			...restOfData,
			prefix,
			body,
		};
	} );
	return snippets;
}

async function getSnippetDirectories() {
	return glob.sync( SNIPPET_DATA_DIR + '*' );
}
exports.getSnippetDirectories = getSnippetDirectories;
exports.getSnippetData = getSnippetData;

generateSnippets();
