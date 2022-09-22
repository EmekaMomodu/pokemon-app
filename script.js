/** Declaration and initialization of global fields */
// array of pokemon data
const pokemonArray = [

    {
        number: 1,
        name: "Bulbasaur",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        description: "There is a plant seed on its back right from the day this Pokemon is born. The seed slowly grows larger.",
        category: "Seed",
        height: "2' 04\"",
        weight: "5.2 lbs",
    },

    {
        number: 2,
        name: "Ivysaur",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
        description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        category: "Seed",
        height: "3' 03\"",
        weight: "28.7 lbs",
    },

    {
        number: 3,
        name: "Venusaur",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
        description: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        category: "Seed",
        height: "6' 07\"",
        weight: "220.5 lbs",
    },

    {
        number: 4,
        name: "Charmander",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        category: "Lizard",
        height: "2' 00\"",
        weight: "18.7 lbs",
    },

    {
        number: 5,
        name: "Charmeleon",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
        description: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
        category: "Flame",
        height: "3' 07\"",
        weight: "41.9 lbs",
    },

    {
        number: 6,
        name: "Charizard",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
        description: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
        category: "Flame",
        height: "5' 07\"",
        weight: "199.5 lbs",
    },

    {
        number: 7,
        name: "Squirtle",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        category: "Tiny Turtle",
        height: "1' 08\"",
        weight: "19.8 lbs",
    },

    {
        number: 8,
        name: "Wartortle",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
        description: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
        category: "Turtle",
        height: "3' 03\"",
        weight: "49.6 lbs",
    },

    {
        number: 9,
        name: "Blastoise",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
        description: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
        category: "Shellfish",
        height: "5' 03\"",
        weight: "188.5 lbs",
    },

    {
        number: 10,
        name: "Caterpie",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
        description: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
        category: "Worm",
        height: "1' 00\"",
        weight: "6.4 lbs",
    },

    {
        number: 11,
        name: "Metapod",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png",
        description: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
        category: "Cocoon",
        height: "2' 04\"",
        weight: "21.8 lbs",
    },

    {
        number: 12,
        name: "Butterfree",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
        description: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        category: "Butterfly",
        height: "3' 07\"",
        weight: "70.5 lbs",
    },

    {
        number: 13,
        name: "Weedle",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
        description: "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
        category: "Hairy Bug",
        height: "1' 00\"",
        weight: "7.1 lbs",
    },

    {
        number: 14,
        name: "Kakuna",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png",
        description: "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
        category: "Cocoon",
        height: "2' 00\"",
        weight: "22.0 lbs",
    },

    {
        number: 15,
        name: "Beedrill",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png",
        description: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
        category: "Poison Bee",
        height: "3' 03\"",
        weight: "65.0 lbs",
    },

    {
        number: 16,
        name: "Pidgey",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
        description: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
        category: "Tiny Bird",
        height: "1' 00\"",
        weight: "4.0 lbs",
    },

    {
        number: 17,
        name: "Pidgeotto",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png",
        description: "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
        category: "Bird",
        height: "3' 07\"",
        weight: "66.1 lbs",
    },

    {
        number: 18,
        name: "Pidgeot",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png",
        description: "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
        category: "Bird",
        height: "4' 11\"",
        weight: "87.1 lbs",
    },

    {
        number: 19,
        name: "Rattata",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
        description: "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
        category: "Mouse",
        height: "1' 00\"",
        weight: "7.7 lbs",
    },

    {
        number: 20,
        name: "Raticate",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png",
        description: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
        category: "Mouse",
        height: "2' 04\"",
        weight: "40.8 lbs",
    },

];

/** function definitions */
function searchByNumber() {

    const numberToSearch = document.getElementById('inputSearchByNumber').value.trim();

    if (!(numberToSearch % 1 === 0 && numberToSearch.indexOf("e") === -1 && numberToSearch !== ""
        && numberToSearch >= 1 && numberToSearch <= 20)) {
        alert("INVALID INPUT: Input must be a valid integer between 1 and 20");
        return;
    }

    for (let pokemon of pokemonArray) {
        if (pokemon.number === parseInt(numberToSearch)) {
            alert(JSON.stringify(pokemon));
            return;
        }
    }

}

function searchByName() {

    const nameToSearch = document.getElementById('inputSearchByName').value.trim().toUpperCase();

    if (nameToSearch.length > 20) {
        alert("INVALID INPUT: Length of input must not be greater than 20");
        return;
    }

    const upperCaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let characterCount = 0;

    for (let character of nameToSearch) {
        for (let upperCaseAlphabet of upperCaseAlphabets) {
            if (upperCaseAlphabet === character) {
                characterCount += 1;
                break;
            }
        }
    }

    if (nameToSearch.length !== characterCount) {
        alert("INVALID INPUT: Input must contain only alphabets A-Z or a-z");
        return;
    }

    let searchResult = [];

    for (let pokemon of pokemonArray) {
        if (pokemon.name.toUpperCase().includes(nameToSearch)) {
            searchResult.push(pokemon);
        }
        if (searchResult.length === 5) break;
    }

    alert(JSON.stringify(searchResult));

}
