# TLH-Notifications

## Google Apps Script

The repository includes a sample Apps Script (`script.gs`) that checks a Google Sheet for any tickers where the **Price Below Threshold?** column is `TRUE`. When one or more tickers match, the script emails `srburnett111@gmail.com` with the ticker symbols. If an error occurs, the script emails the same address with the error message.

### Scheduling
To run the script every weekday at 12:00 PM:

1. Open [Google Apps Script](https://script.google.com/), create a new project and upload the contents of `script.gs`.
2. Save the project.
3. Click **Triggers** (clock icon) in the left-hand menu.
4. Choose **Add Trigger**.
   - Select `checkPriceThreshold` as the function to run.
   - Set the event source to **Time-driven**.
   - Under type of time based trigger select **Day timer**.
   - Set the time of day to **12pm to 1pm**.
   - Check the box to run **Weekdays (Mon-Fri)**.
5. Save the trigger.

The script will now execute each weekday around noon.
