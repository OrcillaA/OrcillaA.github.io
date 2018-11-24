window.onload = () => {
    const numbersAction = document.getElementById('numbers-action');
    const languageNameAction = document.getElementById('language-name-action');
    const languagePopularityAction = document.getElementById('language-popularity-action');
    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display');
        arrays.numbers.sort();
        for (let number of arrays.numbers) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li);
            console.log(number);
        };
    };
    languageNameAction.onclick = () => {
        const languageNameDisplay = document.getElementById('language-names-display');
        arrays.languageNames.sort();
        for (let word of arrays.languageNames) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(word));
            languageNameDisplay.appendChild(li);
            console.log(word);
        };
    };
    languagePopularityAction.onclick = () => {
        const languagePopularityDisplay = document.getElementById('language-popularity-display');
        arrays.languagePopularity.sort(function(a,b){return a.rank - b.rank});
        for (let word of arrays.languagePopularity) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(word.language));
            languagePopularityDisplay.appendChild(li);
            console.log(word);
        };
    };
};
    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
        languageNames: ['javaScript', 'HTML', 'CSS', 'Java', 'C#', 'Python', 'C/C++'],
        languagePopularity: [
            {
                language: 'javaScript',
                rank: 1
            },
            {
                language: 'Java',
                rank: 2
            },
            {
                language: 'Python',
                rank: 3
            },
            {
                language: 'PHP',
                rank: 4
            },
            {
                language: 'C++',
                rank: 5
            },
            {
                language: 'C#',
                rank: 6
            },
            {
                language: 'TypeScript',
                rank: 7
            },

        ],
    };
