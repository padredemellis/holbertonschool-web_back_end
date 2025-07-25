#!/usr/bin/env python3
"""
Annotate the function's parameters
and return values with appropriate types
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    '''Resolviendo esto'''
    return [(i, len(i)) for i in lst]
