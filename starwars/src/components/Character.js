import React from 'react'


const Character = (props) => {
    let src = ""

    if (props.char.name === "Luke Skywalker") {
        src = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Luke_Skywalker.png/220px-Luke_Skywalker.png"
    } else if (props.char.name === "C-3PO") {
        src = "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/C-3PO_droid.png/220px-C-3PO_droid.png"
    } else if (props.char.name === "R2-D2") {
        src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/R2-D2_Droid.png/220px-R2-D2_Droid.png"
    } else if (props.char.name === "C-3PO") {
        src = "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/C-3PO_droid.png/220px-C-3PO_droid.png"
    } else if (props.char.name === "Darth Vader") {
        src = "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Darth_Vader.jpg/220px-Darth_Vader.jpg"
    } else if (props.char.name === "Leia Organa") {
        src = "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg/220px-Princess_Leia%27s_characteristic_hairstyle.jpg"
    } else if (props.char.name === "Owen Lars") {
        src = "https://vignette.wikia.nocookie.net/starwars/images/8/81/Owen-OP.jpg/revision/latest?cb=20070626181249"
    } else if (props.char.name === "Beru Whitesun lars") {
        src = "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png/revision/latest?cb=20170713063118"
    } else if (props.char.name === "R5-D4") {
        src = "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png/revision/latest?cb=20160809033145"
    } else if (props.char.name === "Biggs Darklighter") {
        src = "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406"
    } else if (props.char.name === "Obi-Wan Kenobi") {
        src = "https://vignette.wikia.nocookie.net/disney/images/e/ef/Koopwanorgana_detail.png/revision/latest?cb=20141122093434"
    }


    return (

        <div className="char-container">
            <h2>{props.char.name}</h2>
            <p>Height: {props.char.height}</p>
            <p>Birth Year: {props.char.birth_year}</p>
            <img src={src} alt="StarWars Character" />
        </div>
    )
}

export default Character