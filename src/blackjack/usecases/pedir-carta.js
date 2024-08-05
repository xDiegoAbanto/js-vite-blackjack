/**
 * 
 * @param {Array<String>} deck Necesita el deck de cartas
 * @returns {String} Devuelve la carta  
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}