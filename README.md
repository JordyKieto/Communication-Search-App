# Pepsi Communication Dataset

## Goal
* Create a command line application that can read from a communication data set

## How to Run
* copy ocean.json into root directory
* run 
    >npm install
* run 
    >node index
* type a query when prompted, ie) 
    SENT (>.25)
    harold.lutz@oceania.tyr=> SENT OR RECEIVED(> .15) => 3
* observe results in console

* to exit press
    >ctrl + c 

## Technologies Used
* Javascript

## System Explanation
* The dataset is stored within an IIFE (line 13) so that after creating the tree and graph
    it is picked up by the javascript garbage collector, and no longer takes up space

* The dataset is stored within a binary search tree, and a graph.
    the binary tree allows for log N searches of specific dissent probabilities
    the graph allows for efficient searching of nodes within a network

* The query parser parses user input, and determines which search to do,
    as well as what values to use in a particular search

## Future Improvments
* A more robust and strict querying system that relies less on if else blocks
* A singular data structure, as opposed to two data structres for the same dataset
* Graph search only works from the context of a target to source; 
    would like to extend to do more exhaustive search of network

## Testing
* Since the system is modularized, the three respective functions; queryParser, graphTraversal, and binarySearch, can each be tested by importing them within a testrunner (Mocha) and passing mock data. If the expected results are seen, the system is working
