## Available Scripts

Capstone project is simple project with four routes, it is developed to understand different optimized techniques to use context api methods and also to write test cases using react testing libray and MSW.

Scripts -

npm start - Run locally
npm build - production build


For Optimized Context Api -

Two methods that are used, are inspired by the docs written by Kent C Dodds

1 - https://kentcdodds.com/blog/how-to-optimize-your-context-value

Which are used in the app - src/context/ThemeContext.jsx

2 - https://kentcdodds.com/blog/how-to-use-react-context-effectively

Which are used in the app - src/context/SwitchModeContext.jsx

For Testing -

We have used React Testing Library and MSW

npm run test

![test_cases](https://user-images.githubusercontent.com/124331696/220534997-7965c5f9-0719-4249-a418-106ac303c072.png)

npm run test -- --coverage --watchAll

![coverage_report](https://user-images.githubusercontent.com/124331696/220534902-da19cc2a-0616-42ab-a12d-aa1fa86f0a30.png)