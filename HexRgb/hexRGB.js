$(document).ready(function() {

  $('#rgb').bind('input', function(){
    var $rgbInput = $('#rgb').val()
    var rgb =[]

    if($rgbInput.substring(0,4) == 'rgb('){
        if($rgbInput.substring($rgbInput.length - 1, $rgbInput.length) == ')'){
        $rgbInput = $rgbInput.substring(4,$rgbInput.length - 1)

        rgb = $rgbInput.split('.')
        if(rgb.length <= 1){
          rgb = $rgbInput.split(',')
        }
      }
    }else{
      rgb = $rgbInput.split('.')
      if(rgb.length <= 1){
        rgb = $rgbInput.split(',')
      }
    }

    if(rgb.length == 3){
      for(var i = 0; i < rgb.length; i++){
        try{
          rgb[i] = parseInt(rgb[i])
        }catch(error){
          $('#hex').val('')
        }
      }

      if(rgb[0] >= 0 && rgb[0] <= 255){
        if(rgb[1] >= 0 && rgb[1] <= 255){
          if(rgb[2] >= 0 && rgb[2] <= 255){
            $('body').css('background-color', rgbToHex(rgb))
            $('body').colourBrightness()
            $('#hex').val(rgbToHex(rgb))
          }else{$('#hex').val('')}
        }else{$('#hex').val('')}
      }else{$('#hex').val('')}
    }else{$('#hex').val('')}
  });

  $('#hex').bind('input', function(){
    var $hexInput = $('#hex').val()
    var isOk = false

    if($hexInput.charAt(0) == '#'){
      isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test($hexInput)
      $hexInput = $hexInput.substring(1,$hexInput.length);
    }else{
      isOk  = /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test($hexInput)
    }

    if(isOk){
      $('#rgb').val('rgb(' + hexToRgb($hexInput).r + ',' + hexToRgb($hexInput).g + ',' + hexToRgb($hexInput).b + ')');
      $hexInput = '#' + $hexInput
      $('body').css('background-color',$hexInput)
      $('body').colourBrightness()
    }else{
      $('#rgb').val('')
    }
  });

  function rgbToHex(rgb) {
    return '#' + rgb[0].toString(16) + rgb[1].toString(16) + rgb[2].toString(16)
  }

  function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
  }
});
