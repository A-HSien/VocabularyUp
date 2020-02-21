
export function parseCambridgePage() {
    const ele = document.querySelector<HTMLElement>('.headword');
    if (!ele) return;
    const word = ele.innerText;
    const pron = document.querySelector<HTMLElement>('.us.dpron-i .pron')?.innerText;
    const blocks = document.querySelectorAll('.def-block');
    const defs = Array.from(blocks)
        .map(block => {
            const examps = Array.from(block.querySelectorAll('.examp'));
            return {
                def: block.querySelector<HTMLElement>('.ddef_h')?.innerText.replace('[ ', '[').replace(' ]', ']').replace('\n', ' '),
                trans: block.querySelector<HTMLElement>('.trans')?.innerText,
                examps: examps.map(examp => {
                    return {
                        examp: examp.querySelector<HTMLElement>('.eg')?.innerText,
                        trans: examp.querySelector<HTMLElement>('.trans')?.innerText,
                    };
                })
            };
        });
    return { word, pron, defs };
};