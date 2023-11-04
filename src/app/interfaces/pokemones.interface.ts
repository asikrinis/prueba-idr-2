export interface Pokemon {
  ability: Ability,
  is_hidden: boolean,
  slot: number
}

export interface Ability {
    name: string,
    url: string;
}
