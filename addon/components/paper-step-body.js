import Component from '@ember/component';
import layout from '../templates/components/paper-step-body';

export default Component.extend({
  layout,
  tagName: 'md-step-body',
  classNames: ['flex'],
  classNameBindings: ['getClassNames'],
  getClassNames: Ember.computed('className', function(){
    let classNames = ['vertical::md-padding'];
    let extraClasses = (this.get('className')||''.replace(',', ' '));
    return classNames.concat(extraClasses);
  }),
});
