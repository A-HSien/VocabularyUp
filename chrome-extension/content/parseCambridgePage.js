
export function parseCambridgePage() { 
    const ele = document.querySelector('.headword');
    if (!ele) return;
    const word = ele.innerText;
    const pron = document.querySelector('.us.dpron-i .pron').innerText;

    const defs = [...document.querySelectorAll('.def-block')]
        .map(block => {
            const examps = [...block.querySelectorAll('.examp')];
            return {
                def: block.querySelector('.ddef_h').innerText.replace('[ ', '[').replace(' ]', ']').replace('\n', ' '),
                trans: block.querySelector('.trans').innerText,
                examps: examps.map(examp => {
                    return {
                        examp: examp.querySelector('.eg').innerText,
                        trans: examp.querySelector('.trans').innerText,
                    };
                })
            };
        });
    return { word, pron, defs };
};