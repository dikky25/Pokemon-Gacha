async function gacha(){
    //const name = document.getElementById("data").innerHTML;
    const random = Math.floor(Math.random() * 1126)+1;
    const pokedex = `https://pokeapi.co/api/v2/pokemon/${random}`;
    const options ={
        method :'GET',
        headers: {
            'Content-Type': 'application/json'
          }
    };
    const response = await fetch(pokedex,options)
    .then(data => data.json())
    .then(data=>{
        console.log(data)
        const name = data.name;
        const img = data.sprites.front_shiny;
        const type = data.types[0].type.name;
        const id = data.id;
        const weight = data.weight;
        const height = data.height;
        const hp = data.stats[5].base_stat;
        const attack = data.stats[4].base_stat;
        const defense = data.stats[3].base_stat;
        const sp_attack = data.stats[2].base_stat;
        const sp_defense = data.stats[1].base_stat;
        const speed = data.stats[0].base_stat;
        const abilities = data.abilities[0].ability.name;
        const moves = data.moves[0].move.name;
        const moves2 = data.moves[1].move.name;
        document.getElementById("name").innerHTML= name;
        document.getElementById("pokemon").src= img;
        //document.getElementById("pokemon").src= img;
        // document.getElementById("type").innerHTML= type;
        // document.getElementById("weight").innerHTML= weight;
        // document.getElementById("height").innerHTML= height;
        // document.getElementById("hp").innerHTML= hp;
        // document.getElementById("attack").innerHTML= attack;
        // document.getElementById("defense").innerHTML= defense;
        // document.getElementById("spatk").innerHTML= sp_attack;
        // document.getElementById("speed").innerHTML= speed;
        // document.getElementById("abilities").innerHTML= abilities;
        // document.getElementById("moves").innerHTML= moves;
        // document.getElementById("moves2").innerHTML= moves2;
        // document.getElementsById("logo").src= "logo_open.png";
    }).catch(err=>{document.getElementById("name").innerHTML= "COBA LAGI";
    document.getElementById("pokemon").src= "unk_pokemon.png"
    });
}

