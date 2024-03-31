import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare const gapi: any;
declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleCalendarService  {
   // Flag to track if the Google client library is loaded
   private isGoogleClientLoaded = false;
   // Array to store the list of calendars
   public calendarList: string[] = [];
   // Array to store the list of events
   public events: any[] = [];
 
   constructor() {}
 
   // Method to load the Google client library
   public loadGoogleClient(): Promise<void> {
     return new Promise((resolve, reject) => {
       // Check if the Google client library is already loaded
       if (this.isGoogleClientLoaded) {
         // If already loaded, resolve the promise
         resolve();
       } else {
         try {
           // Initialize the Google OAuth2 client
           google.accounts.oauth2.initCodeClient({
             // Set the client ID obtained from the Google Cloud Console
             client_id: '919666354582-vpt2pbudisut74gha38svjmcbfpebkkb.apps.googleusercontent.com',
             // Set the scope to access the Google Calendar API (read-only)
             scope: 'https://www.googleapis.com/auth/calendar.readonly',
             // Set the UX mode to 'popup' for authentication
             ux_mode: 'popup',
             // Callback function to handle the authentication response
             callback: (response:any) => {
               // Log the authentication response
               console.log('Authentication response:', response);
               // Set the flag to indicate that the Google client library is loaded
               this.isGoogleClientLoaded = true;
               // Resolve the promise
               resolve();
             },
           });
         } catch (error) {
           // If an error occurs, reject the promise with the error
           reject(error);
         }
       }
     });
   }
 
   // Method to list the calendars
   public listCalendars(): Promise<string[]> {
     // Call the Google Calendar API to list the calendars
     return google.api.client.calendar.calendarList.list().then((response:any) => {
       // Extract the calendar items from the response
       const calendars = response.result.items;
       // Map the calendar items to an array of calendar IDs
       this.calendarList = calendars.map((calendar:any) => calendar.id);
       // Return the array of calendar IDs
       return this.calendarList;
     });
   }
 
   // Method to list the events for a specific calendar
   public listEvents(calendarId: string): Promise<any[]> {
     // Call the Google Calendar API to list the events for the specified calendar
     return google.api.client.calendar.events.list({
       // Set the calendar ID for which to retrieve the events
       calendarId: calendarId,
       // Set the minimum start time for the events (current date and time)
       timeMin: new Date().toISOString(),
       // Exclude deleted events
       showDeleted: false,
       // Expand recurring events into individual instances
       singleEvents: true,
       // Set the maximum number of events to retrieve (10 in this case)
       maxResults: 10,
       // Order the events by start time
       orderBy: 'startTime'
     }).then((response:any) => {
       // Extract the event items from the response
       this.events = response.result.items;
       // Return the array of events
       return this.events;
     });
   }
 }

