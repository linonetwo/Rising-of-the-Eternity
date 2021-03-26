# Map Generator

We generate map on three different levels:

- World, contains 100x100 Biome (Global 6kkm)
- Biome, contains 250x250 Overmap (City 6km)
- Overmap, contains 24x24 Tile (House 24m)

We generate Overmap and Map using data from CDDA, where Overmap is a concept come from CDDA.

Map generation is using JSON based prefab, which defines house、shop、hospital and lab.

## Generation Steps

Map generation is top-down, we generate the global map first, so we can provide parameters for overmap generation. Overmap generator takes region type as one of the parameters, it generate a map of city or city-side, and provide parameter for generating actual map that player can walk on.

I choose this top-down generation because I think it is easier to think the algorithm if you have enough parameters.

In this game, map is a grid based 3D structure, we need to decide terrain type of grid node based on parameters and neighborhood nodes. To be parallelism, we need to make right of parameter greater in the process, so ideally each node can be generate in a standalone thread, and without rely on neighborhoods' terrain type.

### Definition of Generation Rules

I want map generation to be Data-Driven, so crowd-sourcing will be easier, player don't need to know JavaScript can just join the game development.

The easiest generation algorithm will be "gibbs sampling" based on conditional probability, branding as "wave function collapse", but this requires writing a human-unreadable and human-unmaintainable probability matrix. Maybe it can be used in a small group of core developers to develop small demo, but not in Github crowd-sourcing, which will add tons of mods of terrain type, resulted in a huge ugly matrix.

So I decided using JSON-LD (RDF) to describe the relationship of terrain type, and derive the conditional probability matrix from the rules.



### Worldmap

