import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { PresenceComponent } from './presence/presence.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { ConversationComponent } from './conversation/conversation.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    UserComponent,
    ContactComponent,
    PresenceComponent,
    ContactsComponent,
    ConversationsComponent,
    ConversationComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
