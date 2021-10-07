const fs = require('fs');
const path = require('path');
const glob = require( 'glob' );
const matter = require('gray-matter');
const str = fs.readFileSync( path.join( __dirname, '../snippet-data/components/alignment-matrix-control.snip'), 'utf8');

const { SNIPPET_DATA_DIR } = require('./constants');
//console.log(matter(str));

const snippet_dirs = glob.sync(SNIPPET_DATA_DIR + '*');

snippet_dirs.map( dir => {
    console.log( path.basename( dir ) )

    // fs.writeFile( path.join( __dirname, '../test/' + path.basename( file ) + '.json'), JSON.stringify({name:test}), ()=> {});
} );
