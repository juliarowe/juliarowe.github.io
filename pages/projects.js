class projectsPage {
  
  get html() {
    var html =  
    "<div id='projectsModal' class='hidden'>\
      <div class='modal-wrapper'>\
        <span class='close'>x</span>\
        <p class='modal-content'></p>\
      </div>\
    </div>\
    <ul id='projects'>\
      <li class='project-item'>\
        <img class='project-pic' src='images/quarks.png'/>\
        <div class = 'overlay'></div>\
        <p class='project-pic-txt'> PARTICLE CLASSIFICATION </p>\
      </li>\
      <li class='project-item'>\
        <img class='project-pic' src='images/image compression.png'/>\
        <div class = 'overlay'></div>\
        <p class='project-pic-txt'>IMAGE COMPRESSION</p>\
      </li>\
      <li class='project-item'>\
        <img class='project-pic' src='images/ising.png'/>\
        <div class = 'overlay'></div>\
        <p class='project-pic-txt'>ISING MODEL</p>\
      </li>\
      <li class='project-item'>\
        <img class='project-pic' src='images/MIXR.png'/>\
        <div class = 'overlay'></div>\
        <p class='project-pic-txt'> MIXR </p>\
      </li>\
      <li class='project-item'>\
        <img class='project-pic' src='images/TDSE.png'/>\
        <div class = 'overlay'></div>\
        <p class='project-pic-txt'>TIME DEPENDENT SCHRODINGER EQUATION</p>\
      </li>\
      <li class='project-item'>\
        <img class='project-pic' src='images/granular.png'/>\
        <div class = 'overlay'></div>\
        <p class='project-pic-txt'>GRANULAR INTRUDERS</p>\
      </li>\
    </ul>";

    return html;
  }
}