function calc() {
    // create variables and persian words
    let count = 0;
    let text = document.getElementById("number").value;
    let result = document.getElementById("nogat");
    const dots = {
      one: ["ب", "ج", "خ", "ز", "ذ", "ض", "ظ", "غ", "ف", "ن"],
      two: ["ت", "ق", "ی"],
      three: ["پ", "ث", "چ", "ژ", "ش"],
    };
    // check the words one by one
    for (word of text) {
      if (dots.one.includes(word)) count++;
      if (dots.two.includes(word) && word !== dots.two[2]) count += 2;
      if (dots.three.includes(word)) count += 3;
      if (word === dots.two[2] && text[text.indexOf(word) + 1] !== " ") {
        if (text.indexOf(word) === text.length - 1) count += 0;
        else count += 2;
      }
      text = text.slice(1, text.length);
    }
    // changing results context to count(dots)
    result.innerHTML = `تعداد نقاط متن : ${String(count)}`;
  }
