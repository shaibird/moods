const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 7, 8, 6, 9]
const grumpyHours = []
const happyHours = []

for ( const mood of hours ) {
    if (mood <= 7) {
        happyHours.push(mood)
    }
    else {
        grumpyHours.push(mood)
    }
}

console.log(`Grumpy days: ${grumpyHours.length} 
Happy days: ${happyHours.length}`)