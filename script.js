function run ()
{
    const calendarId = 'primary';
    const start = getRelativeDate(1, 12);
    const end = getRelativeDate(1, 13);
    const summary = 'Lunch Meeting';
    createEvent(calendarId, start, end, summary)
}

/**
 * Creates an event in the user's default calendar.
 */
function createEvent(calendarId, start, end, summary, description='') {
    let event = {
        summary: summary,
        description: description,
        start: {
            dateTime: start.toISOString()
        },
        end: {
            dateTime: end.toISOString()
        },
        attendees: [],
    };
    event = Calendar.Events.insert(event, calendarId);
    Logger.log('Event ID: ' + event.id);
}

/**
 * Helper function to get a new Date object relative to the current date.
 * @param {number} daysOffset The number of days in the future for the new date.
 * @param {number} hour The hour of the day for the new date, in the time zone
 *     of the script.
 * @return {Date} The new date.
 */
function getRelativeDate(daysOffset, hour) {
    var date = new Date();
    date.setDate(date.getDate() + daysOffset);
    date.setHours(hour);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}