import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

function loadScript() {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
      console.log('Google API script loaded successfully.');
      resolve();
    };
    script.onerror = (error) => {
      console.error('Error loading Google API script:', error);
      reject(error);
    };
    document.head.appendChild(script); // Append the script to head for better practice
  });
}



declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleCalendarService {
  private isGoogleClientLoaded = false;

  constructor() {}

  public async loadGoogleClient(): Promise<void> {
    if (this.isGoogleClientLoaded) {
      return; // Implicitly returns Promise<void> in an async function
    }
    // No else needed after a return statement
    try {
      await loadScript(); // Ensures the script is loaded before proceeding
      await gapi.load('client:auth2');
      await gapi.client.init({
        apiKey: "AIzaSyBcLvnp7fUuZHcBnP4zArJhH6yr6l_q3Ps",
        clientId: "919666354582-vpt2pbudisut74gha38svjmcbfpebkkb.apps.googleusercontent.com",
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: 'https://www.googleapis.com/auth/calendar.readonly'
      });
      await gapi.auth2.getAuthInstance().signIn();
      this.isGoogleClientLoaded = true;
    } catch (error) {
      console.error('Error loading Google API client:', error);
      // Since this is an async function, throwing an error will reject the promise
      throw error;
    }
  }
  

  public listCalendars(): Observable<string[]> {
    const promise = gapi.client.calendar.calendarList.list().then((response: any) => {
      return response.result.items.map((calendar: any) => calendar.id as string);
    }).catch((error: any) => {
      console.error('Error listing calendars:', error);
      throw error;
    });
  
    // Use the 'from' function to convert the typed promise into an Observable<string[]>.
    return from(promise) as Observable<string[]>;
  }
  
  

  public listEvents(calendarId: string): Observable<Event[]> { // Assume Event is a type/interface you've defined
    const promise = gapi.client.calendar.events.list({
      calendarId: calendarId,
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: 'startTime'
    }).then((response: any) => {
      console.log(response.result.items);
      return response.result.items as Event[];
      
    }).catch((error: any) => {
      console.error('Error listing events:', error);
      throw error;
    });
  
    // Convert the typed promise into an Observable<Event[]>.
    return from(promise) as Observable<Event[]>;
  }
}

