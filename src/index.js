'use strict';

function PolicyCheck (btn, options) {
    let self = this;

    self.__data = {
        btn: undefined,
        form: undefined,
        submit: undefined,
        checked: false
    };
    self.__option = Object.assign({}, {
        text: 'First, you agree with the rules.'
    }, options);

    const methods = {
        init () {
            self.__data.btn = btn;

            self.__data.form = methods.parents(self.__data.btn, 'form')[0];
            self.__data.submit = self.__data.form.querySelector('[type="submit"]');

            methods.setEvents();
            methods.setChecked();

            return {
                'self': self,
                'changeSubmitState': methods.changeSubmitState,
                'setChecked': methods.setChecked
            };
        },

        setEvents() {
            self.__data.btn.addEventListener('change', events.OnChangeInput);

            self.__data.form.addEventListener('submit', events.OnSubmitForm);

            self.__data.submit.addEventListener('click', events.OnSubmitForm);
        },

        changeSubmitState() {
            self.__data.submit.disabled = (!self.__data.checked);
        },

        setChecked() {
            self.__data.checked = self.__data.btn.checked;

            methods.changeSubmitState();
        },

        parents(elem, selector) {
            let elements = [];
            let isHaveSelector = (selector !== undefined);

            while ((elem = elem.parentElement) !== null) {
                if (elem.nodeType !== Node.ELEMENT_NODE) {
                    continue;
                } else if (!isHaveSelector || elem.matches(selector)) {
                    elements.push(elem);
                }
            }

            return elements;
        }
    };

    const events = {
        OnChangeInput(event) {
            methods.setChecked();
        },

        OnSubmitForm(event) {
            methods.setChecked();

            if (!self.__data.checked) {
                event.preventDefault();
                alert(self.__option.text);
            }
        }
    };

    return methods.init();
}

export default PolicyCheck;
