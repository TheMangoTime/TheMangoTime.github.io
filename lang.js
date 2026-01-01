<script>
function renderLanguage(){
  const langs = ['EN','TR','ES'];
  const container = document.getElementById('language-switch');
  if(!container) return;
  container.innerHTML = langs.map(l=>`<button onclick="setLang('${l.toLowerCase()}')">${l}</button>`).join(' ');
  setLang(localStorage.getItem('lang')||'en');
}
function setLang(lang){
  localStorage.setItem('lang',lang);
  document.querySelectorAll('[data-en]').forEach(el=>{
    const text = el.getAttribute(`data-${lang}`);
    if(text) el.innerText=text;
  });
}
</script>
