Ember.EasyForm.Error = Ember.EasyForm.BaseView.extend({
  init: function() {
    this._super();
    this.classNames.push(this.getWrapperConfig('errorClass'));
    this.set('tagName', this.getWrapperConfig('errorTagName'));

    Ember.Binding.from('context.errors.' + this.property).to('errors').connect(this);
  },
  templateName: 'easyForm/error'
});
