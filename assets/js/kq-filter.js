/* Projects page: stack filter. Chips are built from the stack words on the cards. */
(function () {
    const bar = document.querySelector('[data-kq-filter]');
    if (!bar) return;

    const cards = Array.prototype.slice.call(document.querySelectorAll('.kq-collection .kq-project-card'));
    if (!cards.length) return;

    const stacks = {};
    cards.forEach(function (card) {
        const own = Array.prototype.map.call(card.querySelectorAll('.kq-stack-chip'), function (chip) {
            return chip.textContent.trim();
        }).filter(Boolean);
        card.kqStacks = own;
        own.forEach(function (name) { stacks[name] = true; });
    });

    const names = Object.keys(stacks).sort(function (a, b) { return a.localeCompare(b); });
    if (names.length < 2) return;

    const buttons = [];
    function addButton(label, value) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'kq-filter-chip';
        button.textContent = label;
        button.setAttribute('aria-pressed', value === null ? 'true' : 'false');
        button.addEventListener('click', function () { apply(value); });
        bar.appendChild(button);
        buttons.push({button: button, value: value});
    }

    function apply(value) {
        buttons.forEach(function (item) {
            item.button.setAttribute('aria-pressed', item.value === value ? 'true' : 'false');
        });
        cards.forEach(function (card) {
            card.hidden = value !== null && card.kqStacks.indexOf(value) === -1;
        });
    }

    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', 'Filter projects by technology');
    addButton('All', null);
    names.forEach(function (name) { addButton(name, name); });
    bar.hidden = false;
})();
