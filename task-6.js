// Brackets
const brackets = (equation) => {
    const brackets = {
        '(': 1,
        ')': -1,
        '[': 2,
        ']': -2,
        '{': 3,
        '}': -3
    };

    const stack = [];

    for (const char of equation) {
        const bracketNumber = brackets[char];

        if (!bracketNumber) {
            continue;
        }

        if (bracketNumber > 0) {
            stack.push(bracketNumber);
        } else if (bracketNumber + stack[stack.length - 1] === 0) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};

// Tests
const equations = [
    ['1 + [2 * (4 + 3) - (9 / 3)]', true],
    ['[()] [{}] [{()}]', true],
    ['{ [[]] ([]) {[]} }', true],
    ['{ ( } )', false],
    ['[ { ( } ) ]', false],
    ['( {[]}', false],
    ['{[]} )', false]
];

for (const [equation, result] of equations) {
    console.log(
        ['🟥', '🟩'][Number(brackets(equation) === result)],
        equation,
        brackets(equation)
    );
}
