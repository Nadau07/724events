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
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            expect(MONTHS[new Date("2022-01-01").getMonth()]).toBe("janvier");
            // verifie si la date corresponds a Janvier quand on appel getMonth
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            expect(MONTHS[new Date("2022-07-08").getMonth()]).toBe("juillet");
            // même principe avec le mois de Juillet
        });
    });
})