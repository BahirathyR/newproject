import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        show: function() {
            this.transitionToRoute('home');
                      },
        
            hw: function() {
                this.transitionToRoute('prodoc');
            },
    
    
        
          how: function() {
        this.transitionToRoute('records');
    }
}
});
