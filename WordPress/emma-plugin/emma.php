<?php 

/* 
Plugin Name: Emma Plugin
Plugin URI: https://github.com/Emmafrederiksen/cms-assignment
Description: A simple plugin to demonstrate WordPress plugin development.
Version: 1.0
Author: Emma
Author URI: https://emmafrederiksen.github.io/portfolio-framework/
Text Domain: emma-plugin
*/ 


// Function: viser en besked i bunden af siden
function emma_plugin_message() {
    echo '
    <div style="
        margin-top:40px;
        text-align:center;
        background:#FFF5E6;
        padding:20px;
        border-top:2px solid #F66F90;
        font-weight:bold;
        color:#F66F90;
    ">
        🍰 Custom plugin by Emma <br>
        <a href="https://www.linkedin.com/in/emma-frederiksen-463639234/" 
           style="color:#F66F90; text-decoration:none; font-weight:normal;" 
           target="_blank">
            Visit my LinkedIn
        </a>
    </div>';
}


// Hook: tilføjer beskeden til footer
add_action('wp_footer', 'emma_plugin_message');

?>