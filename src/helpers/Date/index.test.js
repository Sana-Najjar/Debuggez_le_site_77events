import {getMonthBis, MONTHS} from "./index";
/**
 * 
 */

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return mai for 2024-05-07 as date", () => {
            const date = new Date("2024/05/07"); // -> May;
            const month = getMonthBis(date);
            expect(month).toBe("mai");
        });

        it("the function return décembre for 2024-12-07 as date", () => {
            const date = new Date("2024/12/07"); 
            const month = getMonthBis(date);
            expect(month).toBe("décembre");
            // to implement
        });

        it("it returns current month if no date is given", () => {
            const month = getMonthBis();
            expect(Boolean(month)).toBeTruthy();
            expect(typeof month).toBe("string");
            expect(Object.values(MONTHS)).toContain(month);
            // to implement
        });
    });
})

