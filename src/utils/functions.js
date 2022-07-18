export function capitalize(sentence) {
    return sentence && sentence[0].toUpperCase() + sentence.slice(1);
}

export function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
}