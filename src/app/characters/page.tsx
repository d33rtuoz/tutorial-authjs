import { getCharacters } from "@/lib/queries/characters";

export default async function CharactersPage() {
  const characters = await getCharacters();

  return (
    <>
      <p>character's</p>
      <ul>
        {characters &&
          characters.map((character) => (
            <p key={character.id}>{character.name + ": " + character.class}</p>
          ))}
      </ul>
    </>
  );
}

/**
 * TODO:
 *
 * 1. Check if user logged in.
 *
 */
