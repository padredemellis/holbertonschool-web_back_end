#!/usr/bin/env python3
'''
Python function that inserts a new document in a collection based on kwargs
'''


def insert_school(mongo_colection, **kwargs):
    """
    Inserts a news documents in a collection

    Args:
        mongo_collection: pymongo collection object
        **kwargs: keyword arguments representing document fields
    Returns:
        The new _id of the inserted document
    """
    result = mongo_colection.insert_one(kwargs)
    return result.inserted_id
