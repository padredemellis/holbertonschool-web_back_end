#!/usr/bin/env python3
"""
Module that contains a helper function for pagination. 
This module provides utilities to calculate index ranges for pagination.
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]: 
    """
    Calculate the start and end index for a given page and page_size.
    
    Args:
        page (int): The page number (1-indexed, first page is 1).
        page_size (int): The number of items per page. 
    
    Returns:
        Tuple[int, int]: A tuple containing the start index and end index.
    
    Example:
        >>> index_range(1, 7)
        (0, 7)
        >>> index_range(3, 15)
        (30, 45)
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
