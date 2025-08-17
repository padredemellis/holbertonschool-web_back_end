#!/usr/bin/env python3
"""
Function that lists all documents in a collection
"""


def list_all(mongo_collection):
    """
    Lists all documents in a collection
    
    Args:
        mongo_collection: pymongo collection object
    
    Returns:
        List of documents or empty list if no documents
    """
    documents = [x for x in mongo_collection.find()]
    return documents