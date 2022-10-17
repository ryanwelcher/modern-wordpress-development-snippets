const fs = require( 'fs' );
const { basename } = require( 'path' );
const { README_FILE } = require( './constants' );
const {
	getSnippetDirectories,
	getSnippetData,
} = require( './generate-snippets' );

const TOKEN_START = '<!-- SNIPPET-TOC -->';
const TOKEN_END = '<!-- /SNIPPET-TOC -->';
const TOKEN_REGEX =
	/(\<\!-- SNIPPET-TOC --\>)([\s\S]*)(\<\!-- \/SNIPPET-TOC --\>)/g;

async function generateReadme() {
	const content = fs.readFileSync( README_FILE, 'utf-8' );
	const toc = await generateSnippetTables();
	const enhancedContent = await updateContentWithSnippetTable( content, toc );

	fs.writeFileSync( README_FILE, enhancedContent );
}

async function generateSnippetTables() {
	const dirs = await getSnippetDirectories();
	const data = await Promise.all(
		dirs.map( async ( dir ) => {
			const title = basename( dir );
			const snippetData = await getSnippetData( dir );

			return {
				title,
				snippetData,
			};
		} )
	);
	const content = data.reduce( ( markdown, { title, snippetData } ) => {
		const snippets = snippetData.reduce(
			( snippetTable, { title: snippetTitle, prefix, description } ) => {
				return `${ snippetTable }| ${ snippetTitle } | ${ prefix.map(
					( item ) => `\`${ item }\``
				) } | ${ description } \n`;
			},
			'| Name | Snippet(s) | Description |\n| --- | --- | --- |\n'
		);
		return `${ markdown } ### ${ title }\n${ snippets }\n`;
	}, '' );

	const snippetTableContent = `
\n
${ TOKEN_START }
<!-- This table was automatically generated -->
## Snippets
${ content }
${ TOKEN_END }
	`;

	return snippetTableContent.trim();
}

async function updateContentWithSnippetTable( content, snippetTableContent ) {
	let nextContent = content;
	const [ match ] = nextContent.match( TOKEN_REGEX );

	if ( ! match ) {
		nextContent += snippetTableContent;
	} else {
		nextContent = nextContent.replace( match, snippetTableContent );
	}
	return nextContent;
}

// Start the show
generateReadme();
