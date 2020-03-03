import { fromEvent } from 'rxjs';
import { map, filter, pairwise, throttleTime } from 'rxjs/operators'
import { parsedMark, toLookupMark, parseContent, modifyContent } from './ContentPaser';
import { getToolbox } from './Toolbox';




const skipTags = new Set([
    '#document',
    'HTML'
]);
const event = fromEvent(document, 'mousemove')
    .pipe(map(event => event.target as HTMLElement));

event.pipe(
    filter(ele => !skipTags.has(ele.tagName)),
    filter(ele => !ele.classList.contains(parsedMark)),
    filter(ele => Array.from(ele.childNodes).some(node => node.nodeName === '#text'))
)
    .subscribe(ele => {
        const result = parseContent(ele);
        ele.classList.add(parsedMark);
        let html = ele.innerHTML;
        while (result.length > 0) {
            const last = result.pop();
            if (!last) throw 'error';
            const words = html.substring(last.start, last.end);
            const modified = modifyContent(words);
            html = `${html.substring(0, last.start)}${modified}${html.substring(last.end)}`;
        }
        ele.innerHTML = html;
    });


const dictionaryHref = 'https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94';
event.pipe(
    filter(ele => ele.classList.contains(toLookupMark)),
    pairwise(),
    filter(([a, b]) => {
        return !a ||
            a.innerText === b.innerText ||
            getToolbox().style.display === 'none'
    }),
    map(([a, b]) => b)
)
    .subscribe(ele => {
        const toolbox = getToolbox();
        toolbox.style.display = 'block';
        const rect = ele.getBoundingClientRect();
        const span = toolbox.querySelector('span');
        if (span) span.innerHTML = ele.innerText;
        const a = toolbox.querySelector('a');
        if (a) a.href = `javascript:window.open('${dictionaryHref}/${ele.innerText}', '_blank', 'toolbar=no,location=no,menubar=no,status=no')`;

        const top = rect.top - toolbox.offsetHeight;
        toolbox.style.top = `${top}px`;
        const left = rect.left;
        toolbox.style.left = `${left}px`;
    });


fromEvent(window, 'scroll')
    .pipe(
        throttleTime(200)
    )
    .subscribe(() => {
        const toolbox = getToolbox();
        toolbox.style.display = 'none';
    });
