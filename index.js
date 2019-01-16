const types = document.getElementsByClassName('design-type');
console.log(types);


for (let i = 0; i < types.length; i++) {
  const designType = types[i].attributes['data-design-type'].value;
  types[i].addEventListener('click', function() {
    changeClass(designType);
  });
}

function changeClass(newClass) {
  document.getElementById('design').className = 
  'wedding-design ' + newClass;
}