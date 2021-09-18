function getTasks () {
    return [
        'title1',
        'title2',
        'title3'
    ]
}

function run ()
{
    const calendarId = 'primary';
    const array = getTasks();
    const start = new Date();
    let end = new Date();
    start.setHours(9,0,0);
    array.forEach(summary => {
            end.setTime(start.getTime() + 15 * 60 * 1000);
            createEvent(calendarId, start, end, summary)
            start.setTime(start.getTime() + 15 * 60 * 1000);
        }
    )
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