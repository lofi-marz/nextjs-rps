export type Hand = 'rock' | 'paper' | 'scissors';

type RPSState = {
    hand1?: Hand;
    hand2?: Hand;
};

export enum Winner {
    Player1 = -1,
    Draw,
    Player2,
}

export function winner({ hand1, hand2 }: RPSState): Winner | null {
    //p1 wins if their hand is higher
    //unless their hand is rock and p2 is scissors
    //or its a draw
    if (!hand1 || !hand2) return null; //One of them might not have been selected yet
    if (hand1 == hand2) return 0; //A draw is still an end condition

    const hands: Hand[] = ['rock', 'paper', 'scissors'];

    const windex = (hands.indexOf(hand1) + 1) % 3;
    if (hands[windex] === hand2) return -1;

    return 1;
}
