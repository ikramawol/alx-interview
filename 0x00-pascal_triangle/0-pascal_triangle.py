#!/usr/bin/python3
"""
0-pascal_triangle
"""


def pascal_triangle(n):
    """Reterive a list of lists of integers
    representing the Pascal’s triangle"""
    a = [[] for i in range(n)]
    for i in range(n):
        for j in range(i+1):
            if (j < i):
                if (j == 0):
                    a[i].append(1)
                else:
                    a[i].append(a[i-1][j] + a[i-1][j-1])
            elif (i == j):
                a[i].append(1)
    return a
