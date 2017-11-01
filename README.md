# policy-check
[Demo (CodePen)](https://codepen.io/shimba/pen/POYXjG)

## How to use? ##

Add input check box in form.

```html
<form ...>
    ...
    <label><input type="checkbox" class="[checkbox-class]"></label>
    <button type="submit">Submit</button>
</form>
```

Initialize the script.
```javascript
(function (btns) {
    "use strict";
    var btnsList = [];

    btns.forEach(function (btn) {
        btnsList.push(new PolicyCheck(btn, {
            text: 'My simple warn text.'
        }));
    });
})(document.querySelectorAll('.policyCheck'));
```
