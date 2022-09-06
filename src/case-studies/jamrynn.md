---
slug: "/projects/jamrynn"
title: Jamrynn
year: 2019
client: Jamrynn
stack: React, AWS, Amplify, GraphQL
tags: Research Development Optimization
image1: ../assets/images/projects/jamrynn/cover2.png
image2: ../assets/images/projects/jamrynn/cover1.png
carouselImages:
  [
    ../assets/images/projects/jamrynn/1.jpg,
    ../assets/images/projects/jamrynn/2.jpg,
    ../assets/images/projects/jamrynn/3.jpg,
    ../assets/images/projects/jamrynn/4.jpg,
  ]
metaData:
  {
    title: Jamrynn,
    description: Jamrynn is a web chat application that connects coaches with their sports teams. The web app has a unique chat environment for sports teams where they can set specific goals,
    create workouts,
    communicate among themselves,
    and keep in touch. Moreover,
    the web app would link coaches to teams,
    allowing them to chat and recruit new members.,
  }
---

<div class='root'>
  <div class='project-detail'>
    <h3>Project Detail</h3>
    <div>
      <p>
       Jamrynn is a web chat application that connects coaches with their sports teams. The web app has a unique chat environment for sports teams where they can set specific goals, create workouts, communicate among themselves, and keep in touch. Moreover, the web app would link coaches to teams, allowing them to chat and recruit new members.
      </p>
    </div>
  </div>
  <div class='project-detail'>
    <h3>The Challenge</h3>
    <div>
      <p>
      Using React and AWS, I have developed a specific web application that connects team members to their coaches, just like Slack but for sports teams.
      </p>
      <p>
        The web chat app has a message board, where coaches can connect to their teams, attach media files to their messages, and track teams’ progress. Every team member has their own profile that can be edited and updated. There are different chat environments available in the web app, specific to each team’s interests and goals.
      </p>
    </div>
  </div>
  <div class='project-detail'>
    <h3>The Solution</h3>
    <div>
      <p>
      I have decided to use AWS Amplify together with GraphQL because the application has a lot of relationships between rooms and users which is a great use case for GraphQL as you can get all the information from a single request. The backend is fully serverless because it is cheaper, requires less maintainability and it was super fast to get started. Frontend wise, the UI is optimistic which means that the user doesn’t have to wait for changes to be sent to the server, instead, they are saved into the cache and validated in the background.
      </p>
    </div>
  </div>
</div>
