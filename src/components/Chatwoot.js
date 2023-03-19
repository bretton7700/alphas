import React from "react";


class ChatwootWidget extends React.Component {
    
  
    componentDidMount() {
      // Add Chatwoot Settings
    window.chatwootSettings = {
        hideMessageBubble: false,
        position: "left", // This can be left or right
        locale: "en", // Language to be set
        type: "standard" // [standard, expanded_bubble]
      };
      // Paste the script from inbox settings except the <script> tag
      
   
    (function(d,t) {
      var BASE_URL="https://tuskeechat.ndovucloud.com";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        window.chatwootSettings = {
          type: 'expanded_bubble',
          launcherTitle: 'Chat with us'
        }
        window.chatwootSDK.run({
          websiteToken: 'MxbML6J9ZzY3PZEsWgqnCJE2',
          identifier_hash:"gtzCfMmu6UFx8hQjaq5EZZQj",
          baseUrl: BASE_URL
        })
      }
    })(document,"script");

          }
   
  
    render() {
        return null;
    }
  }

  export default ChatwootWidget;