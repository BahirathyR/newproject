import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        sh: function() {
              this.transitionToRoute('prodoc');
         }     }
});
