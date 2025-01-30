# Dynamic Permission Dropdowns

This React app allows users to dynamically manage permissions by selecting modules and access levels. Users can add new permissions, change existing ones, or remove them.

## Features

- **Add Permissions**: Add a new permission with a dropdown for selecting the module and access level.
- **Remove Permissions**: Remove permissions from the list.
- **Dynamic Dropdowns**: The module dropdown is dynamically filtered to avoid selecting the same module for multiple permissions.
- **Submit Permissions**: A submit button to handle permission submission (implementation can be added).

## Installation Steps

Follow these steps to set up the project:

### 1. Create a New Vite Project

If you don't have a Vite project already, you can create one by running:

```bash
npm create vite@latest dynamic-permission-dropdowns --template react
cd dynamic-permission-dropdowns
npm install
```

This will set up a new Vite project with React as the template.

### 2. Install Bootstrap

Bootstrap is a popular CSS framework that provides a responsive grid system and a variety of pre-built UI components. Install the necessary dependencies:

```bash
npm install bootstrap
```

### 3. Import Bootstrap CSS

Import the Bootstrap CSS file in your `main.jsx` file:

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

### 4. Install Font Awesome

If you need Font Awesome icons for the UI (such as the plus and minus buttons), install the necessary dependencies:

```bash
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
```

### 5. Add the Permission Management Code

Create a new file named `App.jsx` inside the `src` folder, or modify the default `App.jsx` file with the following content:

```jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [permissions, setPermissions] = useState([
    { module: 'Module1', level: 'Read' },
    { module: 'Module2', level: 'Write' },
    { module: 'Module3', level: 'Full' },
  ]);

  const addPermission = () => {
    setPermissions([...permissions, { module: '', level: '' }]);
  };

  const removePermission = (index) => {
    const newPermissions = [...permissions];
    newPermissions.splice(index, 1);
    setPermissions(newPermissions);
  };

  const handlePermissionChange = (index, field, value) => {
    const newPermissions = [...permissions];
    newPermissions[index][field] = value;
    setPermissions(newPermissions);
  };

  const accessLevelOptions = [
    { value: 'Read', label: 'Read (View only)' },
    { value: 'Write', label: 'Write (Create + Update)' },
    { value: 'Full', label: 'Full (Create + Read + Update + Delete)' },
  ];

  const accessModuleNameOptions = [
    { value: 'Module1', label: 'Module 1' },
    { value: 'Module2', label: 'Module 2' },
    { value: 'Module3', label: 'Module 3' },
    { value: 'Module4', label: 'Module 4' },
    { value: 'Module5', label: 'Module 5' },
    { value: 'Module6', label: 'Module 6' },
    { value: 'Module7', label: 'Module 7' },
    { value: 'Module8', label: 'Module 8' },
    { value: 'Module9', label: 'Module 9' },
    { value: 'Module10', label: 'Module 10' },
  ];
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label>Permissions</label>
          <div className="permissions-container">
            {permissions.map((permission, index) => {
              const filteredAccessModuleNameOptions =
                accessModuleNameOptions.filter(
                  (option) =>
                    !permissions.some(
                      (p, idx) => p.module === option.value && idx !== index
                    )
                );

              return (
                <div key={index} className="permission-row">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <select
                      className="form-control"
                      value={permission.module}
                      onChange={(e) =>
                        handlePermissionChange(index, 'module', e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select Module
                      </option>
                      {filteredAccessModuleNameOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>

                    <select
                      className="form-control ms-2"
                      value={permission.level}
                      onChange={(e) =>
                        handlePermissionChange(index, 'level', e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select Access Level
                      </option>
                      {accessLevelOptions.map((level) => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      className="btn btn-danger ms-2"
                      onClick={() => removePermission(index)}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={addPermission}
          >
            <FontAwesomeIcon icon={faPlus} /> Add Permission
          </button>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit Permissions
        </button>
      </form>
    </div>
  );
};

export default App;
```

### 6. Start the Development Server

Run the app with the following command:

```bash
npm run dev
```

Navigate to `http://localhost:5173` (or whichever port Vite assigns) to view and interact with the app.

---

### Contributing

Feel free to fork this repository and submit pull requests if you wish to contribute improvements or fixes.

---
