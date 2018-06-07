import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        Submit: function() {
            this.transitionToRoute('marksheet');
                      },
        
            Sub: function() {
                this.transitionToRoute('marksheet');
            },
            S: function() {
                this.transitionToRoute('marksheet');
            },
    
        
          Su: function() {
        this.transitionToRoute('marksheet');
    }
}
});