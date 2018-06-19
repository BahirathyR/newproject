import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        submit: function() {
              this.transitionToRoute('adminupload');
        },
        sub: function(){
        this.transitionToRoute('adminissued');
         },
         su: function(){
      this.transitionToRoute('admincert');
      },         
         
      }
});
