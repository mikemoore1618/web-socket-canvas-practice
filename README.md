# Socket Canvas

To start you off on this exercise, you've been given a NodeJS + Express server that serves up a static HTML file with a working canvas to paint on with the mouse.

Your task is simply to implement `socket.io` on both the server and the client, so that if two browser windows are viewing `localhost:3000` simultaneously, painting on the canvas from one browser window should live-stream a similar painting on the other.

## Bonus:

Add a way for a user to choose from a few different colors to paint with, and stream that painting color to the other connected browser windows too.