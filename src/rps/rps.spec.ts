import { Hand, winner } from './rps';
import exp from 'constants';

describe('Rock Paper Scissors', () => {
    const hands: Hand[] = ['rock', 'paper', 'scissors'];
    test('Drawing works', () => {
        for (let i = 0; i < hands.length; i++) {
            expect(winner({ hand1: hands[i], hand2: hands[i] })).toBe(0);
        }
    });

    const expectedResults = [
        // R   P  S
        [0, -1, 1], //R p1
        [1, 0, -1], //P
        [-1, 1, 0], //S
    ];

    const allGames = hands
        .map((h1) =>
            hands.map((h2) => [
                h1,
                h2,
                expectedResults[hands.indexOf(h1)][hands.indexOf(h2)],
            ])
        )
        .flat(1) as [Hand, Hand, number][];

    test.each(allGames)('%s vs %s to be %i', (hand1, hand2, expected) => {
        expect(winner({ hand1, hand2 })).toBe(expected);
    });
});
