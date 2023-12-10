let changeText = document.getElementById('paragraphe');

changeText.innerText = 'Bouton cliqué '

document.addEventListener('click', (e)=>{
    alert('bouton cliqué !');
    changeText.innerText = 'Bonjour, monde !';
});
