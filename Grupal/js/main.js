function opciones(){
  if(document.getElementById("Options").innerHTML===""){
    document.getElementById("Options").innerHTML = 
    `
    <div>
                  <ul class="list-group d-lg-none .d-xl-block">
                      <li class="list-group-item"><a href="#">Opcion 1</a></li>
                      <li class="list-group-item"><a href="#">Opcion 2</a></li>
                      <li class="list-group-item"><a href="#">Opcion 3</a></li>
                      <li class="list-group-item"><a href="#">Opcion 4</a></li>
                  </ul>
              </div>
    `
  }else{
    document.getElementById("Options").innerHTML = ""
  }
  }
