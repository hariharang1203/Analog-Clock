## Features

- Displays the current time in a 12-hour format.
- Updates the time every second.
- Responsive design suitable for different screen sizes.

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling of the digital clock.
- **JavaScript**: Logic to calculate and display the current time.

## How It Works

The `AnalogClock` function updates the time displayed on the clock by:

1. Getting the current time using `new Date()`.
2. Extracting hours, minutes, and seconds.
3. Converting the 24-hour format into a 12-hour format.
4. Formatting hours, minutes, and seconds to always show two digits.
5. Updating the HTML element with the current time every second using `setInterval`.
