/* Project links come from the feature image caption, which Ghost stores without
target/rel. Open them in a new tab; they still work as plain links without JS. */
(function () {
    document.querySelectorAll('.kq-project-links a').forEach(function (link) {
        link.target = '_blank';
        link.rel = 'noopener';
    });
})();
