export const INP = "INP";
export const FROM_VAL = "FROM_VAL";
export const TO_VAL = "TO_VAL";
export const REVERSE = "REVERSE";
export const SUMBIT = "SUMBIT";

export const inp = (num) => ({
    type: INP,
    payload: num,
})
export const from_val = (num) => ({
    type: FROM_VAL,
    payload: num
})
export const to_val = (num) => ({
    type: TO_VAL,
    payload: num
})
export const reverse = () => ({
    type: REVERSE
})
export const sumbit = () => ({
    type: SUMBIT
})
