# Keeping Tabs with Radtabs
## Full-Stack Project: Front-End

## Description

Artists, keep tabs on your work with Radtabs! Quickly enter the details of any project for later reference. With Radtabs you can save information about Date, Project Name, Task, Time Spent and Notes. Not just for artists: carpenters, gardeners, bike mechanics or anyone with a self-directed projects can all use Radtabs.

## Summary

I developed the Radtabs website as my second project while a student in the Web Development Immersive (WDI) course at General Assembly. I used JavaScript, CSS3/Sass, HTML5, Handlebars – with some Bootstrap for modals – as my primary programs for the front-end work. For the back-end I built an API using Ruby, Ruby on Rails and PostgreSQL. The database is stored at Heroku.

Technical Specifications
- Single page application
- Custom API
- RESTful routes for handling GET, POST, PATCH, and DELETE requests
- jQuery for DOM manipulation and event handling
- AJAX for interacting with the custom API
- Original design and layout

## Background

Artists, musicians and other individuals making their own work are usually focused on the results. They have an idea of a drawing or a song, and they achieve their goals with a mixture of planning and experimentation.

But once the final work appears, the specific steps taken in the frenzy of creation may be lost to time. Years later an artist may want to know how many hours the work took to complete… or what materials went into it… or who was an influence at the time.

My project is a tracking program for the development of loosely-structured work. It allows a user to record the details of self-directed tasks. As an artist myself I've used such techniques before: usually scribbles on paper to jot down time spent on a drwaing, or to mentions which artists were inspiring me at the time. There are gaps though. Sometimes I wish I had noted, for example, which type of pen I'd used for a certain drawing, or what library book contained a particular reference image I liked.

With the Radtabs website I can quickly and easily track my work. I call the data entries "tabs" – as in "keeping tabs" on my work. And this project isn't limited to me, or even artists in particular. Anyone completing self-directed work can use it to keep tabs on what they do: woodworkers, plumbers, knitters, etc. Then the stored data can be referenced later and used as the basis for calculations.

## Features

Users of Radtabs can create an account from an email address and password, then sign-in with this account to start recording tabs for their work – data that is privately accessible to each indivdual user. Users can create, read, update and delete any tab. When a user signs out all tabs becomes hidden and remain private.

## User Stories

- As a visitor to the Radtabs website, I want to know how to sign up and sign in so that I can become a user.
- As a signed-in user I need to see what options are available to me so that I can use them to record my work.
- As a user accessing the options I need to know how to create new tabs and modify existing ones: create, read, update, delete.
- As a user who has finished entering my tabs information I need to know how to sign out so that I can keep my tabs private.

## Entity Relationship Diagram (ERD)
![Radtabs ERD](https://i.imgur.com/a6bfvTf.jpg)

## Wireframe
![Radtabs Wireframe](https://i.imgur.com/g6d9Uck.jpg)

## Future Features

I would like to include calculations, so that a user can add up the number of hours spent on a project, for example. Also, I'd like to further refine the tabs interface and make it responsive.


## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
