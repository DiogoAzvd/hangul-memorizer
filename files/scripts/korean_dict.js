/* When a consonant is used alone, it sounds like it have an invisible "u" next to it. */
/* Order: consonant -> vowel OR consonant -> vowel -> consonant OR fake consonant -> vowel -> consonant. */

export const korean_consonants = {
    /* Initial */
    ㄱ: {initial: "g", final: "k/g"},
    ㄲ: {initial: "kk", final: "k/kk"},
    ㄴ: {initial: "n", final: "n"},
    ㄷ: {initial: "d", final: "t/d"},
    ㄸ: {initial: "tt", final: "-"},
    ㄹ: {initial: "r", final: "l"},
    ㅁ: {initial: "m", final: "m"},
    ㅂ: {initial: "b", final: "p/b"},
    ㅃ: {initial: "pp", final: "-"},
    ㅅ: {initial: "s", final: "t/s"},
    ㅆ:	{initial: "ss", final: "t/ss"},
    ㅇ: {initial: "-", final: "ng"},
    ㅈ:	{initial: "j", final: "t/j"},
    ㅉ:	{initial: "jj", final: "-"},
    ㅊ:	{initial: "ch", final: "t/ch"},
    ㅋ:	{initial: "k", final: "k"},
    ㅌ:	{initial: "t", final: "t"},
    ㅍ:	{initial: "p", final: "p"},
    ㅎ: {initial: "h", final: "t/h"} /* The sound of h is only pronunciated when it is the first letter and it isn't in the batchim position. */
    /* Final */
}

export const korean_vowels = {
    ㅏ:	"a",
    ㅐ: "ae",
    ㅑ:	"ya",
    ㅒ:	"yae",
    ㅓ: "eo",
    ㅔ:	"e",
    ㅕ: "yeo",
    ㅖ:	"ye",
    ㅗ: "o",
    ㅘ:	"wa",
    ㅙ:	"wae",
    ㅚ: "oe",
    ㅛ:	"yo",
    ㅜ:	"u",
    ㅝ:	"wo",
    ㅞ:	"we",
    ㅟ:	"wi",
    ㅠ:	"yu",
    ㅡ:	"eu",
    ㅢ:	"ui",
    ㅣ:	"i"
}

/* The second consonant is used when the next letter is a vowel and the consonant is in the batchim position "at the bottom". */
/* Always use the final form for the first letter. */