//ABOUT ME

//TODO:
//add scroll spy functionality
//write actual content
//find backgrounds


class projects {

  get loadPage() {
    var html = pages.projects.html;
    $('#content')[0].innerHTML = html;
    this.setListeners();
    this.updateUI;
  }

  setListeners() {
    var self = this;
    $(window).resize(function() {
      self.updateUI;
      self.updateModalUI;
    });

    $('.project-item').on('click', function() {
      self.displayModal;
      self.updateModalUI;
    });

    $('.close').on('click', function(){
      $('#projectsModal').addClass('hidden');
      $('body').css({overflowY:'', marginRight:''});
      $('#header-title').css({paddingRight:''});
    });
  }

  get updateUI() {
    var projects_width = $('#projects').width();
    var proj_img_dim = projects_width * 0.3;
    $('.project-pic').css({width: proj_img_dim, height: proj_img_dim});
    $('.project-item').css({width: (proj_img_dim + 2), height: (proj_img_dim + 2)});
  

    var text_arr = $('.project-pic-txt');
    var len = text_arr.length;

    for (var i = 0; i < len; i++) {
      var text_height = $($('.project-pic-txt')[i]).height();
      var text_top = (proj_img_dim - text_height) / 2;
      $($('.project-pic-txt')[i]).css({'top':(text_top + 'px')});
    }
  }

  get displayModal() {
    $('#projectsModal').removeClass('hidden');

    //TODO: fix this so it just doesn't scroll when the modal is open
    // $('body').css({overflowY:'hidden', marginRight:'17px'});
    // $('#header-title').css({paddingRight:'17px'});
  }

  get updateModalUI() {
    var modalWidth = $('#projectsModal').width();
    var left = $(window).width() * .2;
    if (modalWidth == 450)
      left = 750 * .2;

    $('#projectsModal').css({left:left});
  }
}