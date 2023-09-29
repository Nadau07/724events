/**
 * TESTS UNITAIRES : Gestion des dates (Quand getMonth est appelé)
 */
const MONTHS = {
    0: "janvier",
    1: "février",
    2: "mars",
    3: "avril",
    4: "mai",
    5: "juin",
    6: "juillet",
    7: "août",
    8: "septembre",
    9: "octobre",
    10: "novembre",
    11: "décembre",
  };
  

  describe("Date helper", () => {
    const testCases = [
        { date: "2022-01-01", expectedMonth: "janvier" },
        { date: "2022-07-08", expectedMonth: "juillet" },
    ];

    testCases.forEach((testCase) => {
        it(`When getMonth is called, it returns ${testCase.expectedMonth} for ${testCase.date} as date`, () => {
            expect(MONTHS[new Date(testCase.date).getMonth()]).toBe(testCase.expectedMonth);
        });
    });
});

// TEST qui verifie si les dates correspondent bien quand on execute getMonth