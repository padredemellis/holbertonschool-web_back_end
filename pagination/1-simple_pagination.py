#!/usr/bin/env python3
"""
Implement a method named get_page that takes two integer arguments
page with default value 1 and page_size with default value 10.

You have to use this CSV file
(same as the one presented at the top of the project)
Use assert to verify that both arguments are integers greater than 0.
Use index_range to find the correct indexes to paginate the dataset
correctly and return the appropriate page of the dataset
(i.e. the correct list of rows).
If the input arguments are out of range for the dataset,
an empty list should be returned.
"""
import csv
import math
from typing import List


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


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        if not isinstance(page, int) or not isinstance(page_size, int):
            raise AssertionError("Not is int")
        if page <= 0 or page_size <= 0:
            raise AssertionError("They have to be greater than 0")

        data = self.dataset()
        pagination = index_range(page, page_size)

        start, end = pagination

        return data[start:end]
