import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

// Retrieve the list of small articles from Contentful
export const getSmallArticles = async () => {
    const response = await client.getEntries({
      content_type: 'smallArticle'
    });
  
    return response.items;
  };

  export const getGames = async () => {
    const response = await client.getEntries({
        content_type: 'game'
    });

    return response.items;
  }

  // Get date from String
  export const getLongDate = (dateTimeString) => {
        // Create a new Date object from the datetime string
        const date = new Date(dateTimeString);

        // Define arrays for days of the week and months
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Extract day, month, and year components
        const dayOfWeek = daysOfWeek[date.getDay()];
        const month = monthsOfYear[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();

        // Determine the suffix for the day (st, nd, rd, or th)
        let daySuffix;
        if (day === 1 || day === 21 || day === 31) {
        daySuffix = 'st';
        } else if (day === 2 || day === 22) {
        daySuffix = 'nd';
        } else if (day === 3 || day === 23) {
        daySuffix = 'rd';
        } else {
        daySuffix = 'th';
        }

        // Format the date as "DayOfWeek Month DayOfMonth Year"
        const formattedDate = `${dayOfWeek} ${month} ${day}${daySuffix} ${year}`;

        return formattedDate; // Output: Friday June 21st 2024
  }