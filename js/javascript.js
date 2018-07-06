$(function () {
    $(document).ready(function () {
        var i,
            size,
            color,
            width = $(document).width(),
            height = $(document).height();

        for (i = 1; i <= 150; i++) {
            size = Math.ceil(3 * Math.random());
            $('#background').append('<div class="luciernagas" data-parallaxify-range="' + Math.round(100 * Math.random()) + '" style="top: ' + Math.round(height * Math.random()) + 'px; left: ' + Math.round(width * Math.random()) + 'px; width: ' + size + 'px; height: ' + size + 'px;"></div>');
        }

        for (i = 1; i <= 30; i++) {
            size = Math.ceil(5 * Math.random()) + 2;
            $('#background').append('<div class="luciernagas" data-parallaxify-range="' + Math.round(400 * Math.random()) + '" style="top: ' + Math.round(height * Math.random()) + 'px; left: ' + Math.round(width * Math.random()) + 'px; width: ' + size + 'px; height: ' + size + 'px;"></div>');
        }

        for (i = 1; i <= 15; i++) {
            size = Math.ceil(5 * Math.random()) + 5;
            color = 'rgba(' + Math.round(75 * Math.random()) + ', ' + Math.round(175 * Math.random()) + ', ' + Math.round(4 * Math.random()) + ', ' + (Math.round(100 * Math.random()) / 100) + ')';
            $('#background').append('<div class="luciernagas" data-parallaxify-range="' + Math.round(600 * Math.random()) + '" style="top: ' + Math.round(height * Math.random()) + 'px; left: ' + Math.round(width * Math.random()) + 'px; width: ' + size + 'px; height: ' + size + 'px; background: ' + color + '; box-shadow: 0px 0px 10px ' + color + ';"></div>');
        }

        $.parallaxify({
            /*					positionProperty: 'transform',
                        responsive: true,
                        motionType: 'natural',
                        mouseMotionType: 'gaussian',
                        motionAngleX: 80,
                        motionAngleY: 80,
                        alphaFilter: 0.5,
                        adjustBasePosition: true,
                        alphaPosition: 0.025,*/
        });
        /*$('#foreground').click(function() {
                  $('#info').animate({ marginLeft: "-150px" }, 700);
              });*/
    });
}); // */