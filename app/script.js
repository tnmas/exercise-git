function makeField( language, countryName ) {
    const div = document.createElement( 'div' );
    const lang = document.createElement( 'span' );
    const name = document.createElement( 'span' );

    lang.textContent = language;
    name.textContent = name;

    div.appendChild( lang );
    div.appendChild( countryName );

    return div;
}

fetch( 'https://www.wikidata.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=Q39' ).then( r => {
    r.json().then( data => {
        let realData = data.query.pages[ '153' ].revisions[ 0 ][ '*' ];
        let ch = JSON.parse( realData );
        console.log( ch.labels );
        for ( let entry in ch.labels ) {
            let name = ch.labels[ entry ].value;
            let field = makeField( entry, name );
            document.body.appendChild( field );
            console.log( `${entry}: ${name}` )
        }
    } )
} );
