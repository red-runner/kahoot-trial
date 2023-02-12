# Getting Started.

Hi 👋🏻 and welcome to this humble game exercise. First of all, I want to thank you for
taking the time for reviewing this test. Hopefully, it will be what you're looking for (fingers crossed 🤞🏻).

Before we start, let's go thorugh the basic stack of this project:

- React
- Typescript
- Styled Components
- Jest
- Eslint
- Prettier

**Structure**

In this project you will find 4 main folders inside src, which are the core of the application:

```bash
├── [+] src/
    └── [+] components/                                     # Holds the all the UI of this repository.
    └── [+] hooks/                                          # Holds the custom hooks which handle the state magement of the game.
    └── [+] styles/                                         # Holds the style declarations of the project.
    └── [+] utils/                                          # Holds the helper functions.
```

**Game**

Additionally, the following file holds the `layout` and the `behaviour` of the game: `src/components/tiles-game/tiles-game.tsx`

**Tests**

Each component and function has its own tests. They can be found inside each folder under the name `__tests__`

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

- Will launch `jest` in coverage mode. A reports folder will be generated in the root fo the project where
  istanbul records can be accessed via browser.

### `npm run test:watch`

- Will launch `jest` in watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Further Improvements

- Since this project is based on a UX study which should be visible on the iPad of the CEO, the movile view has been skipped.
  If, the case study had a mobile view, the styles would've been made mobile first, then escalating towards bigger viewports.

- Testing has been put in place to test the core cases. This brings us to a good place, but it would be great to add more
  exhaustive test cases to have 100% peace of mind. For now you can check the current coverage:

  > % Stmts 99.54

  > % Branch 85

  > % Funcs 100

  > % Lines 99.41

- This project works fully with constants alone. Since it wasn't explicitly required, an API to deliver the game specifics hasn't been put in place. However, for a real case scenaro and working withing a team. I would use a tool such as `json-server` to be able to mock the API work parallely with backend.

- HTML prop spreading. The current components have a very specific behaviour and do not accept HTML props. For the purpose of the exercise I decided it was enough. However, to
  make elements more reusable and for passing `aria` attributes, this enhancement would be completely in order.

Thank you very much for taking the time to go through the Readme. If you made it this far:

![](https://media0.giphy.com/media/7aBE32jCr6lOhtuE9v/giphy.gif?cid=ecf05e47vh1ikzbrg8j2svyhgnu999weajbmktitew5d5j6l&rid=giphy.gif&ct=g)
