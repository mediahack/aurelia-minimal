export function configure(aurelia) {
    aurelia.use
        .defaultBindingLanguage()
        .defaultResources()
        .router()
        .eventAggregator();

    aurelia.start().then(a => a.setRoot('app', document.body));
}