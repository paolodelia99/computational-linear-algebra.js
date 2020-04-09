const Matrix = require('../src/matrix');
const assert = require('assert');

describe('test create square matrix', () => {
    it('should give an empty square matrix', () => {
        const matrix = Matrix.createEmptySquareMatrix(3);

        assert.deepStrictEqual(matrix.valueOf(), [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]);
    })
});

describe('test create matrix', () => {
    it('should give an empty matrix of the given dimension', () => {
        const matrix = Matrix.createEmptyMatrix(3,2);

        assert.deepStrictEqual(matrix.valueOf(), [ [ 0, 0], [ 0, 0 ], [ 0, 0 ] ]);
    })
});

describe('test isMatrixSquare method', () => {
    it('should give true', () => {
        const mat = Matrix.createEmptySquareMatrix(3);
        const matrix = new Matrix(mat);

        assert.equal(matrix.isMatrixSquare(), true);
    });

    it('should give false', function () {
        const matrix = new Matrix([[0,0],[1,2,4],[9,4,5,1]]);
        const matrix2 = Matrix.createEmptyMatrix(3,2);

        assert.equal(Matrix.isMatrixSquare(matrix), false);
        assert.equal(Matrix.isMatrixSquare(matrix2), false);
    });
});

describe('test copy and clone matrix', () => {
    it('should be equal the the created matrix', function () {
        const matrix = new Matrix([[1,-2,-1],[1,4,1],[2,2,5]]);
        const mat = Matrix.cloneMatrix(matrix.matrix);
        const mat1 = Matrix.cloneMatrix(matrix); //passing the matrix obj

        assert.deepStrictEqual(matrix.matrix, mat);
        assert.deepStrictEqual(matrix.matrix, mat1);
    });

});

describe('test checkMatrixType method', () => {
    it('should give the two dimensional array that represent the matrix', function () {
        const matrix1 = new Matrix([[1,-2,-1],[1,4,1],[2,2,5]]);
        const matrix2 = [[1,-2,-1],[1,4,1],[2,2,5]];

        //Test the static method
        assert.deepStrictEqual(Matrix.checkMatrixType(matrix1), [[1,-2,-1],[1,4,1],[2,2,5]]);
        //Test the instance method
        assert.deepStrictEqual(matrix1.checkMatrixType(matrix2),[[1,-2,-1],[1,4,1],[2,2,5]]);
    });
});

describe('test getCol Method', () => {
    it('should give the col of a matrix', () => {
        const matrix = [[1,2,-1],[1,4,2],[2,6,5]];
        const matrix2 = new Matrix(Matrix.createEmptyMatrix(4,5));

        // test static method
        assert.deepStrictEqual(Matrix.getCol(matrix,0),[1,1,2]);
        //test instance method
        assert.deepStrictEqual(matrix2.getCol(2), [0,0,0,0]);
    })
});

describe('test matrix transposition', () => {
    it('should give the transpose', () => {
        const matrix = new Matrix([[1,2,-1],[1,4,2],[2,6,5]]);
        const matrix1 = [[1,2,-1],[1,4,2],[2,6,5]];

        // test static method
        assert.deepStrictEqual(matrix.getTranspose().valueOf(), [[1,1,2],[2,4,6],[-1,2,5]]);
        //test instance method
        assert.deepStrictEqual(Matrix.getTranspose(matrix1).valueOf(), [[1,1,2],[2,4,6],[-1,2,5]]);
    });
});

describe('Test matrix sum', () => {
    it('the static method should work', function () {
        const matrix1 = [[1,2,-1],[1,4,2],[2,6,5]];
        const matrix2 = [[1,2,-1],[0,2,3],[0,0,4]];

        assert.deepStrictEqual(Matrix.sumMatrices(matrix1,matrix2), [[2,4,-2],[1,6,5],[2,6,9]] )
    });

    it('the instance method should work' , () => {
        const matrix1 = new Matrix([[1,2,-1],[1,4,2],[2,6,5]]);
        const matrix2 = new Matrix([[1,2,-1],[0,2,3],[0,0,4]]);

        assert.deepStrictEqual(matrix1.sum(matrix2), [[2,4,-2],[1,6,5],[2,6,9]])
    });

    it('should work for different types', function () {
        const matrix1 = new Matrix([[1,2,-1],[1,4,2],[2,6,5]]);
        const matrix2 = [[1,2,-1],[0,2,3],[0,0,4]];

        // test static method
        assert.deepStrictEqual(matrix1.sum(matrix2), [[2,4,-2],[1,6,5],[2,6,9]]);
        //test instance method
        assert.deepStrictEqual(Matrix.sumMatrices(matrix1, matrix2), [[2,4,-2],[1,6,5],[2,6,9]]);
    });
});


describe('Test matrix subtraction', () => {
    it('the static method should work', function () {
        const matrix1 = [[1,2,-1],[1,4,2],[2,6,5]];
        const matrix2 = [[1,2,-1],[0,2,3],[0,0,4]];

        assert.deepStrictEqual(Matrix.subtractMatrices(matrix1,matrix2), [[0,0,0],[1,2,-1],[2,6,1]])
    });

    it('the instance method should work' , () => {
        const matrix1 = new Matrix([[1,2,-1],[1,4,2],[2,6,5]]);
        const matrix2 = new Matrix([[1,2,-1],[0,2,3],[0,0,4]]);

        assert.deepStrictEqual(matrix1.sub(matrix2), [[0,0,0],[1,2,-1],[2,6,1]])
    });

    it('should work for different types', function () {
        const matrix1 = new Matrix([[1,2,-1],[1,4,2],[2,6,5]]);
        const matrix2 = [[1,2,-1],[0,2,3],[0,0,4]];

        // test static method
        assert.deepStrictEqual(matrix1.sub(matrix2), [[0,0,0],[1,2,-1],[2,6,1]]);
        //test instance method
        assert.deepStrictEqual(Matrix.subtractMatrices(matrix1, matrix2), [[0,0,0],[1,2,-1],[2,6,1]]);
    });
});

describe('Test get partition Matrix', () => {
    describe('Test Static method' , () => {
        it('should give a partition of the give matrix', function () {
            const matrix1 = [[1,2,-1],[1,4,2],[2,6,5]];

            assert.deepStrictEqual(Matrix.getSubMatrix(matrix1,0,1,0,1),[[1,2],[1,4]]);
            assert.deepStrictEqual(Matrix.getSubMatrix(matrix1,1,2,1,2),[[4,2],[6,5]]);
            assert.deepStrictEqual(Matrix.getSubMatrix(matrix1,0,2,0,1),[[1,2],[1,4],[2,6]]);
            assert.deepStrictEqual(Matrix.getSubMatrix(matrix1,1,2,0,2),[[1,4,2],[2,6,5]]);

        });

        describe('Test Instance method', () => {
            it('should give a partition of the matrix', function () {
                const matrix1 = new Matrix([[1,2,-1],[1,4,2],[2,6,5]]);

                assert.deepStrictEqual(matrix1.getSubMatrix(0,1,0,1),[[1,2],[1,4]]);
                assert.deepStrictEqual(matrix1.getSubMatrix(1,2,1,2),[[4,2],[6,5]]);
                assert.deepStrictEqual(matrix1.getSubMatrix(0,2,0,1),[[1,2],[1,4],[2,6]]);
                assert.deepStrictEqual(matrix1.getSubMatrix(1,2,0,2),[[1,4,2],[2,6,5]]);

            });
        })
    })
});

describe('test inverse of a matrix', () => {
    it('should give the inverse of the sample matrix', function () {
        const matrix = new Matrix([[1,2,-1],[1,4,2],[2,6,5]]);
        const inverse = matrix.getInverse();

        assert.deepStrictEqual(inverse, [[1,-2,1],[-0.125, 0.875, -0.375],[-0.25, -0.25, 0.25]])
    });

    it('should the right inverse for a upper triangular matrix', function () {
        const matrix = new Matrix([[1,2,-1],[0,2,3],[0,0,4]]);
        const inverse = matrix.getInverse();

        assert.deepStrictEqual(inverse, [[1,-1,1],[0,0.5,-0.375],[0,0,0.25]])
    });
});

describe('test determinant', () => {
    it('should give the diagonal product of U', function () {
        const matrix = new Matrix([[1,2,-1],[1,4,2],[2,6,5]]);

        assert.equal(matrix.getDeterminant(),8 )
    });

    it('tets determinat for upper triangual matrix', function () {
        const matrix = new Matrix([[1,2,-1],[1,4,2],[2,6,5]]);

        assert.equal(matrix.getDeterminant(),8 )
    });
});

describe('test lu decomposition', function() {
    it('should decompose the matrix n x n', () => {

        const matrix = new Matrix([[1,2,-1],[1,4,2],[2,6,5]]);

        assert.deepStrictEqual(matrix.upper.valueOf(), [[1,2,-1],[0,2,3],[0,0,4]]);

        assert.deepStrictEqual(matrix.lower.valueOf(), [[1,0,0],[1,1,0],[2,1,1]])

    });
});

describe('test solving linear system', () => {
    it('should give the right answer', () => {
        const matrix = new Matrix([[1,2,-1],[1,4,2],[2,6,5]]);

        const res = matrix.solveUsingLU([1,1,10]);

        assert.deepStrictEqual(res, [ 9, -3, 2 ]);
    })
});

describe('Test matrix multiplication', () => {
    describe('test ijk Multiplication', () => {
        it('the ijkMultiplication static method should give the right result', function () {
            const matrix1 = [[2,4,5],[-1,2,1],[4,-1,3]];
            const matrix2 = [[6,0,2],[4,-1,4],[3,4,1]];

            assert.deepStrictEqual(Matrix.ijkMultiplication(matrix1,matrix2), [[43,16,25],[5,2,7],[29,13,7]]);
        });

        it('the ijkMultiplication instance method should give the right result', function () {
            const matrix1 = new Matrix([[2,4,5],[-1,2,1],[4,-1,3]]);
            const matrix2 = new Matrix([[6,0,2],[4,-1,4],[3,4,1]]);

            assert.deepStrictEqual(matrix1.ijkMultiplication(matrix2), [[43,16,25],[5,2,7],[29,13,7]]);
        });

        it('should work with both inputs types', function () {
            const matrix1 = new Matrix([[2,4,5],[-1,2,1],[4,-1,3]]);
            const matrix2 = [[6,0,2],[4,-1,4],[3,4,1]];

            assert.deepStrictEqual(matrix1.ijkMultiplication(matrix2), [[43,16,25],[5,2,7],[29,13,7]]);
            assert.deepStrictEqual(Matrix.ijkMultiplication(matrix1,matrix2), [[43,16,25],[5,2,7],[29,13,7]]);
        });
    });

    describe('Test Strassen Multiplication', () => {
        it('should give the right result', function () {
            const matrix1 = [[2,4,5],[-1,2,1],[4,-1,3]];
            const matrix2 = [[6,0,2],[4,-1,4],[3,4,1]];

            assert.deepStrictEqual(Matrix.strassenMultiplication(matrix1, matrix2 , 2), [[43,16,25],[5,2,7],[29,13,7]]);
        });

        it('should work with the matrices objects', function () {
            const matrix1 = new Matrix([[2,4,5],[-1,2,1],[4,-1,3]]);
            const matrix2 = new Matrix([[6,0,2],[4,-1,4],[3,4,1]]);

            assert.deepStrictEqual(matrix1.strassenMultiplication(matrix2 , 2), [[43,16,25],[5,2,7],[29,13,7]]);
        });

        it('should work with the inputs types', function () {
            const matrix1 = new Matrix([[2,4,5],[-1,2,1],[4,-1,3]]);
            const matrix2 = [[6,0,2],[4,-1,4],[3,4,1]];

            assert.deepStrictEqual(matrix1.strassenMultiplication(matrix2 , 2), [[43,16,25],[5,2,7],[29,13,7]]);
            assert.deepStrictEqual(Matrix.strassenMultiplication(matrix1,matrix2 , 2), [[43,16,25],[5,2,7],[29,13,7]]);
        });
    })

});

describe('test create identity matrix', () => {
    it('should give the right identity matrix', () => {
        const idMatrix = Matrix.createIdentityMatrix(4);

        assert.deepStrictEqual(idMatrix,[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]);
    })
});
