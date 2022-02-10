# CityPop

CityPop is a population finder that makes it easy to find the population of any given city on earth. The user can either search for a city directly or search for a country, in which case the cities of the given country will be displayed and sorted by population in descending order.

This app is developed using React Native and Expo Go. Data is gathered from the Geonames API (http://www.geonames.org).

### Setup

This project uses Expo CLI togehter with Expo Go in order to test and develop the app. Follow documentation in order to install and get started: https://docs.expo.dev/get-started/installation/

After cloning repository, navigate to cloned directory and install eventual dependencies using following command:

> npm install

Within the same directory, run following command to start the application using Expo:

> expo start

Once application is initiated, open up Expo Go on your mobile device and scan the QR code that is displayed within the terminal. Note that the application was developed using an Android device, so attempting to run the application within a browser or on iOS could yield unforseen results.

### Relevant documentation

Documentation for geonames search API: http://www.geonames.org/export/geonames-search.html
