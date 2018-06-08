import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        show: function() {
              this.transitionToRoute('prodoc');
        },
     show1: function(){
        this.transitionToRoute('certificate');
         },
         show2: function(){
      this.transitionToRoute('govern');
      },         
      show3: function(){
     this.transitionToRoute('share');
     },
     show4: function(){
    this.transitionToRoute('audit');
     }
    
    }

});
