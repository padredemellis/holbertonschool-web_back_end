#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize the Server class."""
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Get the cached dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Get hypermedia pagination information that is resilient to deletions.

        Args:
            index (int): The starting index (default is None).
            page_size (int): The number of items per page (default is 10).

        Returns:
            Dict: A dictionary containing pagination information.
        """
        indexed_dataset = self.indexed_dataset()
        dataset_length = len(indexed_dataset)

        # Validate index is in valid range
        assert index is None or (0 <= index < dataset_length)

        if index is None:
            index = 0

        data = []
        current_index = index
        items_collected = 0

        # Collect data until we have enough items or reach the end
        while items_collected < page_size and current_index < dataset_length:
            if current_index in indexed_dataset:
                data.append(indexed_dataset[current_index])
                items_collected += 1
            current_index += 1

        next_index = current_index if current_index < dataset_length else None

        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': next_index
        }
