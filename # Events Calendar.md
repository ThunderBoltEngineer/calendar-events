# Events Calendar

### Description
 A calendar application that displays the slate of upcoming events for the year.

### Here are your specifications

 * [ ] Use JavaScript, TypeScript or Flow to create a Single Page Application in the framework of your choice.
 * [ ] Include a README.md with instructions for how to run the app. Ideally, setup consists of something like npm install && npm run start.
 * [ ] In the README.md or through code commenting, please include any tradeoffs you made (e.g. ran out of time so you didn’t do X) or decisions you’d like to explain.
 * [ ] The calendar should render events in the “Monthly” view 
 * [ ] The app should be URL driven. So visiting http://localhost:<port>/2021/4 should take a user to April of 2021. Visiting an invalid URL should take the user to the current month.
 * [ ] Provide a simple Previous and Next month button to allow navigation between months.
 * [ ] Figure out a client-side algorithm for event placement within the calendar cells. Use the events provided here as a sample. Note that while the provided events are finite, in practice the number of events in a month are in the thousands.
 * [ ] Fetch the provided events JSON from a simple node.js server.
 * [ ] Figure out a client-side algorithm for how you will render the weeks and days.
 * [ ] Use Flexbox or CSS Grid to render and style the calendar. Do not use the Table element. While this is not a design position, we do look for a sense of design, so feel free to make this look good, but if you find yourself up against the 4 hour mark, don’t sweat it.
 * [ ] Do not use: any UI component library (e.g. material-ui, react-datepicker).
 * [ ] Do use: functional helper libraries (if you want), such as Lodash, Moment, or date-utils.

### Sample data (data file for testing will be provided)

```
{
  "data": [
    {
      "id": "ee3c0801-9609-49ea-87fa-fcb9b9f438b9",
       "when": {
        "end_time": 1621633320,
        "object": "timespan",
        "start_time": 1621626120
       },
      "participants": [
        {
            "comment": null,
            "name": "Kelsi Shorto",
            "email": "kshorto0@goo.gl",
            "status": "confirmed"
        }
    ],
    "read_only": false,
    "status": "confirmed",
      "title": "An event"
    }
  ]
}
```
