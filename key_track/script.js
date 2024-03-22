const box1 = document.querySelector('.box1');

window.addEventListener('keydown',(e)=>{
    box1.innerHTML = `
    <div class="color">
    <table>
    <tr>
         <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
    </tr>

    <tr>
      <td>${e.key ===' '? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    </table>  
</div>
    `;
})