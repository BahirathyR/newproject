import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        submit: function() {
              this.transitionToRoute('main');
        },
        sub: function() {
            this.transitionToRoute('main');
        },
        mit: function() {
            this.transitionToRoute('service');
        },
        su: function() {
            this.transitionToRoute('main');
        },
    }
});
