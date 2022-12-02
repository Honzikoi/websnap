# WebSnap

> A simple website with a contact form 

`Websnap` is a simple [Reactjs](https://reactjs.org/) web application for static content that includes a contact page.
It was created as the basis for [our own website](https://google.com/), but everyone is welcome to use it.
The implementation strives to be simple and free of unnecessary dependencies.

## Goals

- An easy way to create a simple, secure website with a contact form
- Support for text-based and photo-based home page sections
- Support for Windows and Linux hosting with React.js
- No JavaScript requirement for client browsers

## Structure

- `/app.js` Entry point for the application, configures the server and static content
- `components/contact.js` Implementation of the contact form
- `/components/navbar.js(x)` The global navigation bar's component
- `/components/Footer.js(x)` The global footer component 
- `/components/Section.js` Component for homepage sections

## Instructions

1. Install React.js
1. Fork and clone repository
1. `npm install`
1. `npm start`
1. Open <http://localhost:3000/> and verify
1. Commit changes to repository
1. Deploy repository to hosting service

## Dependencies

| Project      | Home Page                                    |
|--------------|----------------------------------------------|
| Tailwind     | <https://tailwindcss.com/>                   |
| React        | <https://reactjs.org/>                       |
| Fontawesome  | <https://fontawesome.com/>                   |

## Contributing

- Open issue, discuss proposal
- Fork and clone repository
- `npm run lint`
- Review changes
- Send pull request

## License

[MIT](LICENSE)
