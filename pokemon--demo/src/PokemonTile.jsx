import styles from "./PokemonTile,module.css"

export default function PokemonTile({ pokemon, onRemovePokemon, onChangeNickname }) {
    // pokemon--传入一个参数，可以在后面的进行调用里面的内容
    return (
        <div>
            <div>
                <img onDoubleClick={() => onRemovePokemon(pokemon)} src={pokemon.image}></img>
                {/* <p>{pokemon.name}</p> */}

                {/* onchange problem! */}
                <input type="text" value={pokemon.name}
                    onChange={(e) => onChangeNickname(pokemon, e.target.defaultValue)} />
            </div>
        </div>

    )
}