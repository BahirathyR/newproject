import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        submit: function() {
              this.transitionToRoute('employerupload');
        },
        sub: function(){
        this.transitionToRoute('employerissued');
         },
         su: function(){
      this.transitionToRoute('employercert');
      },         
         
      }
});
