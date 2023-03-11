import { useState } from "react";
import PokemonTile from "./PokemonTile";
import styles from "./PokemonBox.module.css"

function PokemonBox({ pokemonArray, onRemovePokemon, onChangeNickname }) {

    return (
        <div className={styles.container}>
            {/* <PokemonTile pokemon={pokemon} />
            在box里面将我想要的此参数命名，传入后面的tile查询他的照片以及名字
             PokemonTile里面写的所有东西可以直接在这里进行调用 */}
            {
                pokemonArray.map((pokemon) =>
                    <PokemonTile onChangeNickname={onChangeNickname} onRemovePokemon={onRemovePokemon} key={pokemon.id} pokemon={pokemon} />)
            }
        </div >
    )
}

export default PokemonBox;