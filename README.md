# classtoggle
![npm version](https://img.shields.io/npm/v/@aarongraston/classtoggle)

construct an object that will toggle a class you pass to it's constructor. Works on document node objects.

## Install
```
$ npm install @aarongraston/classtoggle
```

## Usage

```
import classToggle from '@aarongraston/classtoggle';

hideToggle = classToggle('class-name');

elementToHide = document.querySelector('#myElement');

elementToHide.addEventListener('click', hideToggle.toggle.bind(elementToHide));
```


