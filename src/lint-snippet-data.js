const fs = require( 'fs' );
const path = require( 'path' );
const glob = require( 'glob' );
const matter = require( 'gray-matter' );

const {
	getSnippetDirectories,
	getSnippetData,
} = require( './generate-snippets' );

const { ALLOWED_DATA_KEYS } = require( './constants' );

async function lintSnippets() {
	const dirs = await getSnippetDirectories();
	await Promise.all(
		dirs.map( async ( dir ) => {
			const title = path.basename( dir );
			const snippetData = await getSnippetData( dir );

			// Reduce the array.
			try {
				snippetData.reduce( ( arr, item ) => {
					const { title, prefix, description, file } = item;
					const disallowedKeys = Object.keys( item ).filter(
						( key ) => ! ALLOWED_DATA_KEYS.includes( key )
					);

					if ( disallowedKeys.length > 0 ) {
						throw new Error(
							`Unknown keys \`${ disallowedKeys.join() }\` found in ${ path.basename(
								file
							) }`
						);
					}

					if ( ! title || ! prefix || ! description ) {
						throw new Error(
							`Title, Prefix and Description items cannot be empty in ${ path.basename(
								file
							) }`
						);
					}

					return arr;
				}, [] );
			} catch ( error ) {
				console.log( error );
			}

			return {
				title,
				snippetData,
			};
		} )
	);
}

lintSnippets();
