#!/usr/bin/env python3
"""
Write a function named index_range
that takes two integer arguments page and page_size.

The function should return a tuple of size two containing
a start index and an end index corresponding to the range
of indexes to return in a list for
those particular pagination parameters.

Page numbers are 1-indexed, i.e. the first page is page 1.
"""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """
    Calculate start and end indexes for pagination.
    
    Takes the page number and page size, then calculates
    the start and end indexes for the elements to paginate.
    
    Args:
        page (int): Page number (1-indexed)
        page_size (int): Number of items per page
        
    Returns:
        tuple[int, int]: A tuple containing (start_index, end_index)
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
