import { fromEvent } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'


const skipTags = new Set([
    '#document',
    'HTML'
]);
const parsedMark = `parsed-${Date.now()}`;


fromEvent(document, 'mousemove')
    .pipe(
        map(event => event.target as HTMLElement),
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


const startTag = `<font class="${parsedMark} ">`;
const endTag = `</font>`;
const regex = /[a-zA-Z]/;

const modifyContent = function (org_content: string) {
    let content = org_content;
    let end = -1;

    for (let i = content.length - 1; i >= 0; i--) {
        const char = content[i];
        if (regex.test(char)) {
            if (end < 0) {
                end = i;
            }
        }
        else if (end >= 0) {
            if ((content[i] !== '&' && content[end + 1] !== ';')) {
                content = content.substring(0, end + 1) + endTag + content.substring(end + 1);
                content = content.substring(0, i + 1) + startTag + content.substring(i + 1);
            }
            end = -1;
        }
        if (i === 0 && end > 0)
            content = startTag + content;
    }
    return content;
};
/* debugger;
modifyContent('國國國aaa國國國');
modifyContent('aaa國國國aaa國國國aaa');
modifyContent('aaa 國國國 aaa 國國國 aaa'); */
modifyContent('&gt;國國國aaa國國國');
modifyContent('國國國aaa國&gt;國國');

function parseContent(ele: HTMLElement) {
    const result = [] as { start: number, end: number }[];
    if (ele.childElementCount === 0) {
        result.push({ start: 0, end: ele.innerText.length });
        return result;
    }

    let pos = 0;
    let parsedChildCount = 0;
    let residual = ele.innerHTML;

    // start parse
    while (residual.length !== 0) {
        const tagStartIndex = residual.search(/<[a-z]/);

        if (tagStartIndex === 0) { //start with tag
            const node = ele.childNodes[parsedChildCount] as HTMLElement;
            if (!node) throw 'parse error';

            const len = node.outerHTML.length;
            pos += len;
            residual = residual.substring(len);
            parsedChildCount++;
        }
        else if (tagStartIndex > 0) { // start with text
            result.push({ start: pos, end: pos + tagStartIndex });
            pos += tagStartIndex;
            residual = residual.substring(tagStartIndex);
            parsedChildCount++;
        }
        else { // only text
            result.push({ start: pos, end: pos + residual.length });
            break;
        }
    }

    console.log(result);
    return result;
};