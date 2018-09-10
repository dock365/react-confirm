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
        Confirm Message...
        <button onClick={props.doConfirm}>Confirm</button>
      </div>
    );
  }

  export default confirm(ConfirmDialog)(HomePage)
```

## Contributing!
All contributions are super welcome!


## License

React Confirm is MIT licensed.