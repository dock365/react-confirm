# React Confirm
<!-- [![Build Status](https://travis-ci.org/codebraces/reconfirm.svg?branch=master)](https://travis-ci.org/codebraces/reconfirm) -->
[![npm Version](https://img.shields.io/npm/v/@dock365/reconfirm.svg)](https://www.npmjs.com/package/@dock365/reconfirm)


## Install
1 Install react confirm as dependency
  ```bash
  # Using yarn package manager
  $ yarn add @dock365/reconfirm

  # Using npm package manager
  $ npm install --save @dock365/reconfirm
  ```
2 Import React confirm module
  ```javascript
  // ES6
  import Confirm from "@dock365/reconfirm"

  // ES5
  var Confirm = require("@dock365/reconfirm");
  ```
## Example

```javascript
  import React from "react";
  import confirm from "@dock365/reconfirm";

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

ReConfirm is MIT licensed.