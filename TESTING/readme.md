To test the react App :-
1. Manual testing - Just use the app by ourself
2. Automated Testing - To write code to check the App


#JEST + React Testing Library

1. Create react app already have these library so no need to install from the outside

#Types of Automated testing :-

✅Unit testing =  testing individual units or components {Functions etc}

✅Intigrating testing  = testing how different units or components of a software application interact with each other. Combining Unit testing

✅E2E (end to end) testing.


#####
Folder name = __test__
1. xxx.test.js


2. Example :-

import {render} from "@teting-library/react";
import {counter} from "../Counter";

test("render the textarea". () => {
    console.log(render(<Counter/>));
})

3. npm test