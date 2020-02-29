$("#add-user").on("click", function(event) {
    event.preventDefault();
    addInformation()

  });

  function addInformation(){
    let name = document.querySelector('#name-input').value
    console.log(name);
    
    let email = document.querySelector('#email-input').value
    console.log(email);

    let age = document.querySelector('#age-input').value
    console.log(age);

    let about = document.querySelector('#comment-input').value
    console.log(about);
    
    

    let infoJson = {
        name,
        email,
        age,
        about
    }

    setStorage(infoJson)
  }

  function getItinialStorage(){    
    let infoData = []
    let storage = window.localStorage.getItem('infos')

    if(storage !== null){
        infoData = JSON.parse(storage)
    }
    return infoData
  }

  let infos = getItinialStorage()

  

  function setStorage(infoVal){
      infos.push(infoVal)

      window.localStorage.setItem('infos', JSON.stringify(infos) )
  }

  function renderDOM(){
      $("#body-info").html('')
      infos.forEach(item => {
            document.querySelector('#info-body').innerHTML = `
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Most Recent Member</h3>
                </div>
                <div class="panel-body" id="recent-member">
                    <h2 id="name-display">${item.name}</h2>
                    <h4 id="email-display">Email: ${item.email}</h4>
                    <h4 id="age-display">Age: ${item.age}</h4>
                    <p id="comment-display">${item.about}</p>
            </div>            
            `
      });
  }

  renderDOM(infos)