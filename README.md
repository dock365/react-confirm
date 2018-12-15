# React Confirm
<!-- [![Build Status](https://travis-ci.org/codebraces/react-confirm.svg?branch=master)](https://travis-ci.org/codebraces/react-confirm) -->
[![npm Version](https://img.shields.io/npm/v/@braces/react-confirm.svg)](https://www.npmjs.com/package/@braces/react-confirm)


## Install
1 Install react confirm as dependency
  ```bash
  # Using yarn package manager
  $ yarn add @braces/react-confirm

  # Using npm package manager
  $ npm install --save @braces/react-confirm
  ```
2 Import React confirm module
  ```javascript
  // ES6
  import Confirm from "@braces/react-confirm"

  // ES5
  var Confirm = require("@braces/react-confirm");
  ```
## Example

```javascript
  import React from "react";
  import confirm from "@braces/react-confirm";

  const Component = (props) => {
    return (
      <div>
        <button onClick={props.confirm}>Confirm</button>
        {props.confirmed ? "Is confirmed" : "Is not confirmed"}
      </div>
    );
  };

  const ConfirmDialog= (props) => {
    return (
      <div>
        <h3>{props.title}</h3>
        <p>{props.message</p>
        <button onClick={props.onConfirm}>Confirm</button>
      </div>
    );
  }

  export default confirm(ConfirmDialog)(HomePage)
```

## Properties
### Component Props
| Name               | Type   | Description                                                          |
| :----------------- | :----- | :----------------- | :------------------------------------------------------------------- |
| confirm | (message?: string, title?: string, data?: any, onConfirmAction?: Function) => void | This is the function to invoke confirm dialog, *onConfirmAction* is callback function that will trigger with *data* as parameter when confirmed |
| confirmed | boolean | Here we can access confirm dialog status, whether confirmed or not |
| confirmData | any | Here we can access confirm data provided in *onConfirmAction* |

### Confirm Dialog Props
| Name               | Type   | Description                                                          |
| :----------------- | :----- | :----------------- | :------------------------------------------------------------------- |
| onConfirm | Function | Have to invoke *onConfirm* when the confirm button is pressed / clicked. |
| onCancel | Function | Have to invoke *onCancel* when the cancel button is pressed / clicked. |
| title | string | Here we can access *title* provided in *onConfirmAction* |
| message | string | Here we can access *message* provided in *onConfirmAction* |
| data | any | Here we can access *data* provided in *onConfirmAction* |


## Contributing!
All contributions are super welcome!


## License

React Confirm is MIT licensed.