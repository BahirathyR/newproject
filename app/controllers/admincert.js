import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        Submit: function() {
            this.transitionToRoute('sentrequest');
                      },
        
            Sub: function() {
                this.transitionToRoute('sentrequest');
            },
            S: function() {
                this.transitionToRoute('sentrequest');
            },
           
          Su: function() {
        this.transitionToRoute('sentrequest');
    }
}
});
