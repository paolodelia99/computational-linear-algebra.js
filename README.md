# Computational Linear Algebra

Js library for Linear algebra

## Features 

- open source
- other stuff

## Usage

Computational-linear-algebra.js can be used in both node.js and in the browser.

Install computational-linear-algebra.js using npm

    npm install computational-linear-algebra

## Matrices

```javascript
const Matrix = require('Matrix');

const matrix1 = new Matrix( [[1,2,-1],[1,4,2],[2,6,5]] );
const matrix2 = new Matrix( [[1,2,-1],[0,2,3],[0,0,4]] );

console.log(matrix1.rank); //matrix rank
console.log(matrix1.getTranspose());//[[1,1,2],[2,4,6],[-1,2,5]]
console.log(matrix1.sum(matrix2));  //[[2,4,-2],[1,6,5],[2,6,9]]
console.log(matrix1.sub(matrix2)); // [[0,0,0],[1,2,-1],[2,6,1]]
//todo: other stuff

```

## Vectors

```javascript
const Vector = require('Vector');

const vector1 = new Vector([1,2,1]);
const vector2 = new Vector(-1,0,1);

console.log(vector1.getNorm); // 6
console.log(vector1.scalarProduct(5));//[5,10,5]
console.log(vector1.sum(vector2));  //[1,5,0]
console.log(matrix1.sub(matrix2)); // [[0,0,0],[1,2,-1],[2,6,1]]
//todo: other stuff

```

## Linear Transformations

```javascript
const LinearTransformation = require('LinearTransformation');

// You can instantiate a linear tranformation using a bidimensional array
const t1 = new LinearTransformation([[1,0,1],[2,0,-1],[1,1,1]]);  
// or you can also use the matrix object
const t2 = new LinearTransformation(new Matrix([[1,0,1],[2,0,-1],[1,1,1]])); 

//Apply the linear transformation to a vector
const vector = new Vector([1,2,0]);
console.log(t1.apply(vector)) //[1,4,-1]

```

## Documentation

- Getting started 
- Examples
- Overview
- History

## Build 

First clone the project from github:
    
    git clone git://https://github.com/paolodelia99/linear-algebra.js
    cd computational-linear-algebra

Install the project dependencies:

    npm install
    
//todo: finisci

## Test

To execute tests for the library, install the project dependencies once:

    npm install

Then, the tests can be executed:

    npm test

## Todos

- Matrix
    - [ ] matrix validity method (check if the input matrix is valid)
    - [ ] rank of the matrix
    - [ ] Implement a more efficient multiplication
        - Using c++ ??
        - Using paralellization
    - [ ] Implement other decomposition
        - [ ] QR
        - [ ] Cholesky
        - [ ] Singular Value Decomposition
    - [ ] eigenvalues and eigenvectors
    
- Vector 
    - [ ] Check Linear Dependency

- Linear Transformation
    - [ ] Injective, Surjective => Bijective
    - [ ] Linear Transformation applyed to matrices
        
- [ ] class Vector Spaces ?? (see if it does make sense)

- Analytical Geometry ??
    - [ ] inner products
    - [ ] length and distances
    - [ ] Angles and orthogonality
    - [ ] rotations
    
- Code Stuff
    - [ ] compile js in prev version using babel
    - [ ] build npm package
    - [ ] documentation
    
## Author

Paolo D'Elia

## License

Apace license 2.0