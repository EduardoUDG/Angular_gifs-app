# GifsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.9.

Search for gifs of any type and see illustrative letters about the search, maintaining a maximum list of 10 elements as search history.

---

## Dependecies
- Node `v16.x`
- Angular CLI `v15.x`
- Giphy API

You have to **generate** a Giphy API, to do that you need to create a Giphy account and create a **API key** to use in the application. 

- [Giphy account register](https://developers.giphy.com/)

To generate an API token, you have to choose **API** to create a token in the following link:
- [Generate API token](https://developers.giphy.com/dashboard/)

After that, you have to put an `app name` and `description`, accept the termns and copy de **API key**

Finally go to the **gif.service.ts** file and put your API key in the **API_KEY** service vairable.

---

## Install
Run `npm install`

## Run as a development mode

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
