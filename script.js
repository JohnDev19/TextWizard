        // TEXT CONVERSIONS
        function toggleMenu() {
            document.getElementById('navbar').classList.toggle('active');
        }

        function convertToUppercase() {
            const textarea = document.getElementById('text');
            textarea.value = textarea.value.toUpperCase();
        }
        function convertToLowercase() {
            const textarea = document.getElementById('text');
            textarea.value = textarea.value.toLowerCase();
        }
        function convertToProperCase() {
            const textarea = document.getElementById('text');
            textarea.value = textarea.value
                .toLowerCase()
                .replace(/(^\w|\s\w)/g, m => m.toUpperCase());
        }
        function convertToReverse() {
            const textarea = document.getElementById('text');
            textarea.value = textarea.value.split('').reverse().join('');
        }
        function resetText() {
            document.getElementById('text').value = '';
        }
        function copyText() {
    const textarea = document.getElementById('text');
    textarea.select();
    document.execCommand('copy');
    
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.style.display = 'block';

    setTimeout(() => {
        alertMessage.style.display = 'none';
    }, 2000);
}
        
        // FONTIFY
        
        const fonts = {
            mathsans: {
                a: "𝖺", b: "𝖻", c: "𝖼", d: "𝖽", e: "𝖾", f: "𝖿", g: "𝗀", h: "𝗁", i: "𝗂",
                j: "𝗃", k: "𝗄", l: "𝗅", m: "𝗆", n: "𝗇", o: "𝗈", p: "𝗉", q: "𝗊", r: "𝗋",
                s: "𝗌", t: "𝗍", u: "𝗎", v: "𝗏", w: "𝗐", x: "𝗑", y: "𝗒", z: "𝗓",
                A: "𝖠", B: "𝖡", C: "𝖢", D: "𝖣", E: "𝖤", F: "𝖥", G: "𝖦", H: "𝖧", I: "𝖨",
                J: "𝖩", K: "𝖪", L: "𝖫", M: "𝖬", N: "𝖭", O: "𝖮", P: "𝖯", Q: "𝖰", R: "𝖱",
                S: "𝖲", T: "𝖳", U: "𝖴", V: "𝖵", W: "𝖶", X: "𝖷", Y: "𝖸", Z: "𝖹",
                " ": " "
            },
            serif: {
                a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞", f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢",
                j: "𝐣", k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨", p: "𝐩", q: "𝐪", r: "𝐫",
                s: "𝐬", t: "𝐭", u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳",
                A: "𝐀", B: "𝐁", C: "𝐂", D: "𝐃", E: "𝐄", F: "𝐅", G: "𝐆", H: "𝐇", I: "𝐈",
                J: "𝐉", K: "𝐊", L: "𝐋", M: "𝐌", N: "𝐍", O: "𝐎", P: "𝐏", Q: "𝐐", R: "𝐑",
                S: "𝐒", T: "𝐓", U: "𝐔", V: "𝐕", W: "𝐖", X: "𝐗", Y: "𝐘", Z: "𝐙",
                " ": " "
            },
            handwriting: {
        a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲",
        j: "𝓳", k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻",
        s: "𝓼", t: "𝓽", u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
        A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘",
        J: "𝓙", K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡",
        S: "𝓢", T: "𝓣", U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
        " ": " "
    },
    scriptbold: {
        a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊",
        j: "𝒋", k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓",
        s: "𝒔", t: "𝒕", u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛",
        A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰",
        J: "𝑱", K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹",
        S: "𝑺", T: "𝑻", U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
        " ": " "
    },
    script: {
        a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "ℎ", i: "𝑖",
        j: "𝑗", k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟",
        s: "𝑠", t: "𝑡", u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
        A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼",
        J: "𝐽", K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅",
        S: "𝑆", T: "𝑇", U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
        " ": " "
    },
      sansitalic: {
        a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪",
        j: "𝘫", k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳",
        s: "𝘴", t: "𝘵", u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
        A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐",
        J: "𝘑", K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙",
        S: "𝘚", T: "𝘛", U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
        " ": " "
    },
    outline: {
        a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚",
        j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣",
        s: "𝕤", t: "𝕥", u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
        A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀",
        J: "𝕁", K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ",
        S: "𝕊", T: "𝕋", U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
        " ": " "
    },
    sansbold: {
        a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶",
        j: "𝗷", k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿",
        s: "𝘀", t: "𝘁", u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
        A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜",
        J: "𝗝", K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥",
        S: "𝗦", T: "𝗧", U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
        " ": " "
    },
    bolditalic: {
        a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞",
        j: "𝙟", k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧",
        s: "𝙨", t: "𝙩", u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
        A: "𝘼", B: "𝘽", C: "𝘾", D: "𝘿", E: "𝙀", F: "𝙁", G: "𝙂", H: "𝙃", I: "𝙄",
        J: "𝙅", K: "𝙆", L: "𝙇", M: "𝙈", N: "𝙉", O: "𝙊", P: "𝙋", Q: "𝙌", R: "𝙍",
        S: "𝙎", T: "𝙏", U: "𝙐", V: "𝙑", W: "𝙒", X: "𝙓", Y: "𝙔", Z: "𝙕",
        " ": " "
    },
    gothic: {
        a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦",
        j: "𝔧", k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯",
        s: "𝔰", t: "𝔱", u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷",
        A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ",
        J: "𝔍", K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ",
        S: "𝔖", T: "𝔗", U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ",
        " ": " "
    },
    typewriter: {
        a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒",
        j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛",
        s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
        A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸",
        J: "𝙹", K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁",
        S: "𝚂", T: "𝚃", U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
        " ": " "
    },
     square: {
        a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸",
        j: "🄹", k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁",
        s: "🅂", t: "🅃", u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉",
        A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸",
        J: "🄹", K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁",
        S: "🅂", T: "🅃", U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
        " ": " "
    },
     blue: {
        a: "🇦 ", b: "🇧 ", c: "🇨 ", d: "🇩 ", e: "🇪 ", f: "🇫 ", g: "🇬 ", h: "🇭 ", i: "🇮 ",
        j: "🇯 ", k: "🇰 ", l: "🇱  ", m: "🇲 ", n: "🇳 ", o: "🇴 ", p: "🇵 ", q: "🇶 ", r: "🇷 ",
        s: "🇸 ", t: "🇹 ", u: "🇺 ", v: "🇻 ", w: "🇼 ", x: "🇽 ", y: "🇾 ", z: "🇿 ",
        A: "🇦 ", B: "🇧 ", C: "🇨 ", D: "🇩 ", E: "🇪 ", F: "🇫 ", G: "🇬 ", H: "🇭 ", I: "🇮 ",
        J: "🇯 ", K: "🇰 ", L: "🇱 ", M: "🇲 ", N: "🇳 ", O: "🇴 ", P: "🇵 ", Q: "🇶 ", R: "🇷 ",
        S: "🇸 ", T: "🇹 ", U: "🇺 ", V: "🇻 ", W: "🇼 ", X: "🇽 ", Y: "🇾 ", Z: "🇿 ",
        " ": " "
    },
     widespace: {
        a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ",
        j: "ｊ", k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ",
        s: "ｓ", t: "ｔ", u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ",
        A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ",
        J: "Ｊ", K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ",
        S: "Ｓ", T: "Ｔ", U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ",
        " ": " "
    },
    lightshade: {
        a: "a░", b: "b░", c: "c░", d: "d░", e: "e░", f: "f░", g: "g░", h: "h░", i: "i░",
        j: "j░", k: "k░", l: "l░", m: "m░", n: "n░", o: "o░", p: "p░", q: "q░", r: "r░",
        s: "s░", t: "t░", u: "u░", v: "v░", w: "w░", x: "x░", y: "y░", z: "z░",
        A: "A░", B: "B░", C: "C░", D: "D░", E: "E░", F: "F░", G: "G░", H: "H░", I: "I░",
        J: "J░", K: "K░", L: "L░", M: "M░", N: "N░", O: "O░", P: "P░", Q: "Q░", R: "R░",
        S: "S░", T: "T░", U: "U░", V: "V░", W: "W░", X: "X░", Y: "Y░", Z: "Z░",
        " ": " "
    }
        };

        let selectedFont = 'mathsans';
let originalText = '';

function toggleMenu() {
    document.getElementById('navbar').classList.toggle('active');
}

function toggleDropdown() {
    document.getElementById("fontDropdown").classList.toggle("show");
}

function selectFont(font) {
    selectedFont = font;
    document.querySelector('.font-dropdown-btn').textContent = font.charAt(0).toUpperCase() + font.slice(1);
    document.getElementById("fontDropdown").classList.remove("show");
}

function convertFont() {
    const textarea = document.getElementById('text');
    if (originalText === '') {
        originalText = textarea.value;
    }
    textarea.value = textarea.value.split('').map(char => fonts[selectedFont][char] || char).join('');
}

function resetToNormal() {
    document.getElementById('text').value = originalText;
}

function copyText() {
    const textarea = document.getElementById('text');
    textarea.select();
    document.execCommand('copy');
    
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.style.display = 'block';

    setTimeout(() => {
        alertMessage.style.display = 'none';
    }, 2000); 
}
window.onclick = function(event) {
    if (!event.target.matches('.font-dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("font-dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function updateOriginalText() {
    originalText = '';
}

document.getElementById('text').addEventListener('input', updateOriginalText);

// NUMBERS TO WORDS 
function toggleMenu() {
    document.getElementById('navbar').classList.toggle('active');
}

function numberToWords(num) {
    const belowTwenty = [
        'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
        'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];
    const tens = [
        '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];
    const thousands = [
        '', 'Thousand', 'Million', 'Billion', 'Trillion'
    ];
    if (num === 0) return belowTwenty[0];
    function helper(n) {
        if (n < 20) return belowTwenty[n];
        if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 > 0 ? ' ' + belowTwenty[n % 10] : '');
        if (n < 1000) return belowTwenty[Math.floor(n / 100)] + ' Hundred' + (n % 100 > 0 ? ' ' + helper(n % 100) : '');
        for (let i = 0; i < thousands.length; i++) {
            const unit = 1000 ** (i + 1);
            if (n < unit) return helper(Math.floor(n / (unit / 1000))) + ' ' + thousands[i] + (n % (unit / 1000) > 0 ? ' ' + helper(n % (unit / 1000)) : '');
        }
    }
    return helper(num);
}

function convertToWords() {
    const input = document.getElementById('number');
    const resultContainer = document.getElementById('resultContainer');
    const result = document.getElementById('result');
    const number = parseInt(input.value);
    
    if (isNaN(number)) {
        result.textContent = 'Please enter a valid number.';
    } else {
        result.textContent = numberToWords(number);
    }

    resultContainer.style.display = 'block';
}

function resetInput() {
    document.getElementById('number').value = '';
    document.getElementById('resultContainer').style.display = 'none';
}

        
        // CHARACTER COUNTER 
        function toggleMenu() {
            document.getElementById('navbar').classList.toggle('active');
        }

        function countText() {
            const text = document.getElementById('text').value;
            const charCount = text.length;
            const charCountNoSpaces = text.replace(/\s/g, '').length;
            const wordCount = text.trim().split(/\s+/).length;
            const paraCount = text.split(/\n+/).length;
            const readingTime = (wordCount / 200).toFixed(2);
            const speechTime = (wordCount / 130).toFixed(2);

            document.getElementById('charCount').innerText = charCount;
            document.getElementById('charCountNoSpaces').innerText = charCountNoSpaces;
            document.getElementById('wordCount').innerText = wordCount;
            document.getElementById('paraCount').innerText = paraCount;
            document.getElementById('readingTime').innerText = readingTime + ' minutes';
            document.getElementById('speechTime').innerText = speechTime + ' minutes';

            document.getElementById('results').style.display = 'block';
        }

        function resetText() {
            document.getElementById('text').value = '';
            document.getElementById('results').style.display = 'none';
        }

        function copyText() {
    const textarea = document.getElementById('text');
    textarea.select();
    document.execCommand('copy');
    
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.style.display = 'block';

    setTimeout(() => {
        alertMessage.style.display = 'none';
    }, 2000); // 2000 milliseconds = 2 seconds
}
        
        // Binary Converter | Translator 
        