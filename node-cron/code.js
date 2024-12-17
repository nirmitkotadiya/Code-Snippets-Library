// code.js

// Import the node-cron library
const cron = require('node-cron');

// Simple cron job that runs every minute
cron.schedule('* * * * *', () => {
  console.log('Running a task every minute');
});

// Cron job that runs every day at midnight
cron.schedule('0 0 * * *', () => {
  console.log('Running a task at midnight');
});

// Cron job that runs every Monday at 9 AM
cron.schedule('0 9 * * 1', () => {
  console.log('Running a task every Monday at 9 AM');
});

// Cron job with custom message and task logging
cron.schedule('*/5 * * * *', () => {
  console.log('This task runs every 5 minutes');
});
