# Node-Cron Example in Code Snippets Library

## Overview

This subrepo contains a simple demonstration of using the `node-cron` library to schedule tasks in a Node.js application.

The `node-cron` library allows you to set up cron jobs, which are scheduled tasks that can run at specific intervals or times. In this example, you will see various cron jobs running at different schedules.

## Install Dependencies

To use this code, ensure you have `node-cron` installed in your project.

You can install the required dependencies by running the following command:

```bash
npm install node-cron
```

## How it Works

The `node-cron` library allows you to schedule tasks using cron expressions. A cron expression defines when a task will run, based on a time pattern. The general format of a cron expression is:

```sql
* * * * * (Seconds, Minutes, Hours, Day of Month, Month, Day of Week)
```

## Code Snippet

1. **Every Minute** - This cron job runs every minute.

````js
cron.schedule('* * * * *', () => {
  console.log('Running a task every minute');
});


2. **Every Day at Midnight** - This cron job runs every day at midnight.

```js
cron.schedule('0 0 * * *', () => {
  console.log('Running a task at midnight');
});
````

3. **Every Monday at 9 AM** - This cron job runs every Monday at 9 AM.

```js
cron.schedule('0 9 * * 1', () => {
  console.log('Running a task every Monday at 9 AM');
});
```

4. **Every 5 Minutes** - This cron job runs every 5 minutes.

```js
cron.schedule('*/5 * * * *', () => {
  console.log('This task runs every 5 minutes');
});
```

## References

- [node-cron](https://www.npmjs.com/package/node-cron)
