import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        show1: function() {
              this.transitionToRoute('main');
        },
        show2: function() {
            this.transitionToRoute('main');
      }
    }
});
