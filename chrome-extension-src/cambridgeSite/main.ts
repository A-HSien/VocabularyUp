
import { parseCambridgePage } from './parseCambridgePage';
import * as syncStorage from './syncStorage';


(async function main() { 
    if (location.host.includes('dictionary.cambridge.org')) {
        const toAdd = parseCambridgePage();
        if (toAdd) await syncStorage.setAsync(toAdd.word, toAdd);
        console.log(toAdd);
    } else if (document.getElementById('wordListSaved')) {
        const all = await syncStorage.getAllAsync();
        const array = Object.keys(all).map(key => all[key]);
        sessionStorage.setItem('wordList', JSON.stringify(array));
        document.getElementById('wordListSaved')?.click();
    }
})();

