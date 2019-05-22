// promises to retieve a blob of json
// make ajax request ; use fetch function

// function fetchAlbums(){
//     fetch('https://rallycoding.herokuapp.com/api/music_albums')
//         .then(res => res.json())
//         .then(json => console.log(json));
// };

// fetchAlbums();

// async/await to retieve a blob of json
// make ajax request ; use fetch function
 
async function fetchAlbums(){
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();

    console.log(json);
};

fetchAlbums();


const fetchAlbums = async() => { // arrow function
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();

    console.log(json);
};

fetchAlbums();