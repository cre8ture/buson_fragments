# Haiku Fragments by Buson

This project is a visual and interactive representation of fragments from haiku poems by Yosa Buson, a Japanese poet from the Edo period. The source of the haiku fragments can be found [here](https://www.masterpiece-of-japanese-culture.com/literatures-and-poems/haiku/yosa-busons-haiku-poems).

## About Yosa Buson

Yosa Buson (1716-1784) was a Japanese poet and painter from the Edo period. He is one of the most significant poets of the Edo era and is best known for his haikus. Buson's work adds a pictorial element that has been compared to the painterly style of his haikus.

## About Haiku

Haiku is a form of traditional Japanese poetry. It is a short poem of just three lines, with a 5-7-5 syllable pattern. This means the first line will have five syllables, the second line will have seven, and the third line will have five again. Haikus are often nature-themed and are used to evoke images and emotions in a very concise format.

## Project Description

This project creates a grid of items on the webpage. When you hover over an item in the grid, a random polygon is generated within the grid item, and a random fragment from one of Buson's haikus is displayed. The polygon and the haiku fragment disappear when you stop hovering over the grid item.

The random polygons are created using the CSS `clip-path` property with a `polygon()` function. The points for the polygon are generated randomly, resulting in a unique polygon each time.

The haiku fragments are selected randomly from an array of fragments. Each fragment is displayed along with its English translation.

## How to Run

To run this project, simply open the `index.html` file in your web browser. Enjoy the interactive display of Buson's haiku fragments and the dynamically generated polygons.