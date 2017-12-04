function makeBox( boxName, boxValue ) {

    const div = document.createElement( 'div' );
    const name = document.createElement( 'span' );
    const value = document.createElement( 'span' );

    div.classList.add( 'box' );
    name.classList.add( 'name' );
    value.classList.add( 'value' );

    name.textContent = boxName;
    value.textContent = boxValue;

    div.appendChild( name );
    div.appendChild( value );

    return div;
}

const data = [
    { name: 'Banana', value: 42 },
    { name: 'Orange', value: 33 },
    { name: 'Boskoop', value: 50 },
];

data.forEach( entry => {
    const box = makeBox( entry.name, entry.value );
    document.body.appendChild( box );
} );
