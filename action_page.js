document.addEventListener("DOMContentLoaded", function() {
    fields.name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.subject = document.getElementById('subject');
   })

function isNotEmpty(value) {
if (value == null || typeof value == 'undefined' ) return false;
return (value.length > 0);
}

