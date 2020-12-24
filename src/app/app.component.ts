import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  ngOnInit(): void {
    window.watsonAssistantChatOptions = {
     integrationID: "acf1774f-088a-410c-8e41-fa4395c18146", // The ID of this integration.
     region: "us-south", // The region your integration is hosted in.
     serviceInstanceID: "fc24f43a-304b-425c-92a6-b15bfbb00c50", // The ID of your service instance.
     onLoad: function(instance) { instance.render(); }
   };
 setTimeout(function(){
   const t=document.createElement('script');
   t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
   document.head.appendChild(t);
 });

  }
}
