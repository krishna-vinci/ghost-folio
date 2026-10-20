/* Footer email: the address is split in the markup and only assembled here. */
(function () {
    document.querySelectorAll('.kq-contact-email').forEach(function (el) {
        const user = el.getAttribute('data-user');
        const domain = el.getAttribute('data-domain');
        if (!user || !domain) return;
        const link = document.createElement('a');
        link.href = 'mailto:' + user + '@' + domain;
        link.textContent = 'Email';
        el.textContent = '';
        el.appendChild(link);
    });
})();
