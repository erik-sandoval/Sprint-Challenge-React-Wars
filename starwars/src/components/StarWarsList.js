import React from 'react'
import Character from './Character';
import "./StarWars.scss"

const StarWarsList = (props) => {
    return (
        <div className="container">
            {
                props.characters.map(char => (
                    <Character key={Date.now} char={char} />
                ))
            }
        </div>
    )
}

export default StarWarsList