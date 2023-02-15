import { Card } from './Card';

export interface Deck {
  id: number;
  deckName: string;
  cards: Card[];
}
