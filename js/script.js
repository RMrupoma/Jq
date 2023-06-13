$(document ).ready (function(){
//dragg
	 $( "#draggable" ).draggable();
//accordion
	 $( "#accordion" ).accordion({
	 	  collapsible: true
	 });
//atc
	  var data = [
	  	"Html",
	  	"Css",
	  	"Js",
	  	"Php",
	  	"Jq"
	];
	  $( "#c-name" ).autocomplete({
      source: data
    });
//rez
	  $( "#resizable" ).resizable();
//sort
	   $( "#sortable" ).sortable();
//checkbox
	    $( "input" ).checkboxradio();
//retalcar
	$( ".controlgroup" ).controlgroup()
    $( ".controlgroup-vertical" ).controlgroup({
      "direction": "vertical"
    });
//data
    $( "#datepicker" ).datepicker();
//sl menu
     $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();
//tabs
     $( "#tabs" ).tabs({
      collapsible: true
    });
//tooltip
      $( document ).tooltip();
//show
       // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect" ).hide();
     } );
 //addclass
 $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }