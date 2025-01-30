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
    <div className="container my-4">
      <form>
        <div className="mb-3">
          <label className="form-label">Permissions</label>
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
                <div key={index} className="permission-row mb-3">
                  <div className="d-flex align-items-center mb-2">
                    {/* Module Dropdown */}
                    <select
                      className="form-select"
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

                    {/* Access Level Dropdown */}
                    <select
                      className="form-select ms-2"
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

                    {/* Remove Button */}
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

          {/* Add New Permission Button */}
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={addPermission}
          >
            <FontAwesomeIcon icon={faPlus} /> Add Permission
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-3">
          Submit Permissions
        </button>
      </form>
    </div>
  );
};

export default App;
