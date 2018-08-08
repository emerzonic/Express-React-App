
//validate form data before submit
$(document).ready(function(){
$(function validate() {
    $('#signinForm, #signupForm, #searchForm')
      .form({
        fields: {
          text: {
            identifier: 'term',
            rules: [{
              type: 'empty', //field is not empty
              prompt: 'Please enter a valid search term before submitting.'
            }, {
              type: 'minLength[3]', //not less than 3 characters
            }]
          },
          first_name: {
            identifier: 'fullName',
            rules: [{
              type: 'empty', //field is not empty
              prompt: 'Full name is required.'
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