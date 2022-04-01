// implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;

function htmlspecialchars(formData) {
  formData = formData.split('');
  for(i=0; i<formData.length; i++) {
    if(formData[i] === '<') {
      formData.splice(i,1,'&lt;');
      i--;
    }
    else if(formData[i] === '>') {
      formData.splice(i,1,'&gt;');
      i--;
    }
    else if(formData[i] === '"') {
      formData.splice(i,1,'&quot;');
      i--;
    }
    else if(formData[i] === '&') {
      formData.splice(i,1,'&amp;');
      i--;
    }
  }
  return formData.join('');
}