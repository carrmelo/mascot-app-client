# MascotApp - Client

Client-side repository for a web-application centered on looking for temporary residencies and final adoptions of abandon pets. MascotApp gathers information on animals in need of a home from different organizations, in one place. The web-application backend is located in [this repository](https://github.com/carrmelo/mascot-app-server).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3. 



## Getting Started

- [Clone the repository](https://github.com/carrmelo/mascot-app-client.git), go to the app directory and install all the dependencies.

- To check out functionality you will need to clone the [Mascot-app-server](https://github.com/carrmelo/mascot-app-server) repository and follow the instructions.

- For now, new users and organizations can only be added via [Postman](https://www.getpostman.com/). You can do the following:

  - POST request to ```http://localhost:3000/users``` or ```http://localhost:3000/orgs```

  - User

    ```
    {
        name: "User Name",
        email: "example@emailaddress.com",
        location: "City"
    }
    ```

  - Organization

    ````
    {
        name: "Organization",
        email: "example@emailaddress.com",
        location: "City",
        web: "www.webaddress.com"
    }
    ````

    

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



## Next Steps

- This app is currently being migrated to React-Redux

- The Organization and User interface is currently being redesigned.

   

## Collaborating

This is a non-profit project so any collaboration and suggestion will be valuable. Don't hesitate to send a private message.
