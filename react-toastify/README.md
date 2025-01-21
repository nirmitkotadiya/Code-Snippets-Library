# React Toastify

[React Toastify](https://github.com/fkhadra/react-toastify) is a React library for displaying notifications (toast messages) in a beautiful and easy-to-use way.

## Installation

You can install `react-toastify` via `npm` or `yarn` :

### npm

```bash
npm install --save react-toastify
```

### yarn

```bash
yarn add react-toastify
```

## Usage

1. Import the necessary components (`ToastContainer` and `toast`) from `react-toastify`.
2. Add a `ToastContainer` to your app (you can customize its placement and behavior with props).
3. Call the `toast` function whenever you want to display a toast notification.

### Basic Example

```jsx
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles

function App() {
  // Function to trigger a toast notification
  const notify = () => toast("Wow, so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      {/* ToastContainer will render the toast notifications */}
      <ToastContainer />
    </div>
  );
}

export default App;
```

### Toast Types

You can customize your toast messages using different toast types:

```jsx
import { toast } from 'react-toastify';

// Trigger a success toast
toast.success("This is a success message!");

// Trigger an error toast
toast.error("Oops, something went wrong!");

// Trigger an info toast
toast.info("Here's some information for you!");

// Trigger a warning toast
toast.warn("Warning! Please check your input.");
```

### Customization

You can customize the `ToastContainer` with various props to control the appearance, position, and behavior of the toast notifications. Some commonly used props include:

- **`position`**: Controls where to place the toast (`top-left`, `top-right`, `bottom-left`, `bottom-right`, etc.).
- **`autoClose`**: Controls the time in milliseconds before the toast automatically closes (set `false` to disable auto-close).
- **`hideProgressBar`**: Whether to hide the progress bar (set to `true` to hide).
- **`newestOnTop`**: Whether to show the newest toast on top (set to `true` to display the newest toast first).

### Example with Customization:

```jsx
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notifySuccess = () => toast.success("Success!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    newestOnTop: true,
  });

  const notifyError = () => toast.error("Error!", {
    position: "bottom-right",
    autoClose: false,
    hideProgressBar: false,
  });

  return (
    <div>
      <button onClick={notifySuccess}>Success Toast</button>
      <button onClick={notifyError}>Error Toast</button>
      <ToastContainer />
    </div>
  );
}

export default App;
```

### API Reference

- **`toast.success(message, options)`**: Displays a success toast message.
- **`toast.error(message, options)`**: Displays an error toast message.
- **`toast.info(message, options)`**: Displays an informational toast message.
- **`toast.warn(message, options)`**: Displays a warning toast message.
- **`toast(message, options)`**: Displays a default toast message.

The `options` parameter is an object where you can pass various configuration options (position, autoClose, etc.).

For more advanced use cases, including controlling the toast container and manually dismissing toasts, refer to the official [React Toastify documentation](https://fkhadra.github.io/react-toastify/).

---
