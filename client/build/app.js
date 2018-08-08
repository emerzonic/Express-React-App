
//validate form data before submit
$(document).ready(function(){
$(function validate() {
    $('#signinForm, #signupForm, #searchForm')
      .form({
        fields: {
          term: {
            identifier: 'term',
            rules: [{
              type: 'empty', //field is not empty
              prompt: 'Please enter a valid search term before submitting.'
            }, {
              type: 'minLength[3]', //not less than 3 characters
            }]
          },
          term: {
            identifier: 'term',
            rules: [{
              type: 'empty', //field is not empty
              prompt: 'Please enter a valid search term before submitting.'
            }, {
              type: 'minLength[3]', //not less than 3 characters
            }]
          },
          start_date: {
            identifier: 'start_date',
            rules: [{
              type: 'empty', //field is not empty
              prompt: 'Please select a start date.'
            }, {
              type: 'minLength[3]', //not less than 3 characters
            }]
          },
          end_date: {
            identifier: 'end_date',
            rules: [{
              type: 'empty', //field is not empty
              prompt: 'Please select a end date.'
            }]
          },
          username: {
            identifier: 'username',
            rules: [{
              type: 'empty', //field is not empty
              prompt: 'Username is required.'
            }]
          },
          password: {
            identifier: 'password',
            rules: [{
              type: 'empty', //field is not empty
              prompt: 'password is required.'
            }, {
              type: 'minLength[3]', //not less than 3 characters
            }, {
              type: 'maxLength[12]', //not more than 12 characters long
            }]
          }
        }
      });
    })
  });