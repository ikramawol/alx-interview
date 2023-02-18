#!/usr/bin/python3
"""
Module 0-rotate_2d_matrix
"""


def rotate_2d_matrix(matrix):
    """Rotate it 90 degrees clockwise

    Parameters
    ---------
    matrix: list[list[int]]
        2d matrix
    """
    n = len(matrix)
    copy_matrix = [row[:] for row in matrix]
    for i in range(0, n):
        for j in range(n - 1, -1, -1):
            matrix[j][n - 1 - i] = copy_matrix[i][j]
