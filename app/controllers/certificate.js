import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        show: function() {
              this.transitionToRoute('dash');
        },
     show1: function(){
        this.transitionToRoute('certificate');
         },
         show2: function(){
      this.transitionToRoute('docupload');
      },         
      show3: function(){
     this.transitionToRoute('share');
     },
     show4: function(){
    this.transitionToRoute('audit');
     },
    
    
    
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