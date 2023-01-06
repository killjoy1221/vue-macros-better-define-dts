import { KebabCase } from "type-fest";

type Phrases = "helloWorld" | "helloMoon" | "goodbyeAll";

export type PhraseTypes = KebabCase<Phrases>;
