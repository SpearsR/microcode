namespace microcode {
    export function samples(): {
        label: string
        ariaId?: string
        src?: string
        icon: string
    }[] {
        return [
            {
                label: "new program",
                ariaId: "N1",
                src: '{"progdef":{"P":[{"R":[{"S":[],"A":[]},{"S":[],"A":[]}]},{"R":[{"S":[],"A":[]}]},{"R":[{"S":[],"A":[]}]},{"R":[{"S":[],"A":[]}]},{}]}}',
                icon: "new_program",
            },
            {
                label: "flashing heart",
                ariaId: "N2",
                src: '{"progdef":{"P":[{"R":[{"S":["S4"],"A":["A5"],"M":["M15(0101010101100010101000100)","M15(0000001010011100010000000)"]},{}]},{"R":[{}]},{"R":[{}]},{"R":[{}]},{"R":[{}]}]}}',
                icon: "flashing_heart",
            },
            {
                label: "smiley buttons",
                ariaId: "N3",
                src: '{"progdef":{"P":[{"R":[{"S":["S2"],"A":["A5"],"F":["F3"],"M":["M15(1101111011000001000101110)"]},{"S":["S2"],"A":["A5"],"F":["F4"],"M":["M15(1101111011000000111010001)"]}]},{"R":[{"S":[],"A":[]}]},{"R":[{"S":[],"A":[]}]},{"R":[{"S":[],"A":[]}]},{}]}}',
                icon: "smiley_buttons",
            },
            {
                label: "rock, paper, scissors",
                ariaId: "N8",
                src: '{"progdef":{"P":[{"R":[{"S":["S3"],"A":["A7"],"M":["M8","M20A"]},{"S":["S9A"],"A":["A5"],"F":["F8"],"M":["M15(0000001110011100111000000)"]},{"S":["S9A"],"A":["A5"],"F":["F9"],"M":["M15(1111110001100011000111111)"]},{"S":["S9A"],"A":["A5"],"F":["F10"],"M":["M15(1100111010001001101011001)"]},{}]},{"R":[{}]},{"R":[{}]},{"R":[{}]},{}]}}',
                icon: "rock_paper_scissors",
            },
            {
                label: "chuck a duck",
                ariaId: "N5",
                src: '{"progdef":{"P":[{"R":[{"S":["S3"],"A":["A5"],"F":["F17_shake"],"M":["M15(0000000000000000000000000)"]},{"S":["S3"],"A":["A6"],"F":["F17_shake"]},{"S":["S7"],"A":["A5"],"M":["M15(0110011100011110111000000)"]},{"S":[],"A":[]}]},{"R":[{"S":[],"A":[]}]},{"R":[{"S":[],"A":[]}]},{"R":[{"S":[],"A":[]}]},{}]}}',
                icon: "teleport_duck",
            },
            {
                label: "pet hamster",
                ariaId: "N4",
                src: '{"progdef":{"P":[{"R":[{"S":[],"A":["A5"],"M":["M15(0000011011000000111000000)"]},{"S":["S2"],"A":["A5"],"F":["F7"],"M":["M15(0000001010000001000101110)","M15(0000011011000000111000000)"]},{"S":["S2"],"A":["A2"],"F":["F7"],"M":["M19giggle"]},{"S":["S3"],"A":["A5"],"F":["F17_shake"],"M":["M15(0000001010000000111010001)","M15(0000011011000000111000000)"]},{"S":["S3"],"A":["A2"],"F":["F17_shake"],"M":["M19sad"]},{"S":[],"A":[]}]},{"R":[{"S":[],"A":[]}]},{"R":[{"S":[],"A":[]}]},{"R":[{"S":[],"A":[]}]},{}]}}',
                icon: "pet_hamster",
            },
            {
                label: "head or tail",
                ariaId: "N9",
                src: '{"progdef":{"P":[{"R":[{"S":["S3"],"A":["A7"],"M":["M7","M20A"]},{"S":["S9A"],"A":["A5"],"F":["F8"],"M":["M15(1111110101111110111001110)"]},{"S":["S9A"],"A":["A5"],"F":["F9"],"M":["M15(1111110001100011000111111)"]},{}]},{"R":[{}]},{"R":[{}]},{"R":[{}]},{}]}}',
                icon: "heads_tails",
            },
            {
                label: "reaction time",
                ariaId: "N6",
                src: '{"progdef":{"P":[{"R":[{"A":["A5"],"M":["M15(0000000000001000000000000)"]},{"S":["S4"],"A":["A1"],"M":["M2"]},{}]},{"R":[{"A":["A5"],"M":["M15(1111111111111111111111111)"]},{"S":["S2"],"A":["A1"],"F":["F0"],"M":["M3"]},{"S":["S2"],"A":["A1"],"F":["F1"],"M":["M4"]},{}]},{"R":[{"A":["A5"],"M":["M15(0111001010011100101001010)"]},{}]},{"R":[{"A":["A5"],"M":["M15(0111001010011100101001110)"]},{}]},{}]}}',
                icon: "reaction_time",
            },
            {
                label: "hot potato",
                ariaId: "N7",
                src: '{"progdef":{"P":[{"R":[{"S":["S4"],"A":["A1"],"F":["F19","F18"],"M":["M2"]},{}]},{"R":[{"A":["A5"],"M":["M15(1111110101111110111001110)"]},{"A":["A2"],"M":["M19sad"]},{}]},{"R":[{}]},{"R":[{}]},{}]}}',
                icon: "hot_potato",
            },
        ]
    }
}
