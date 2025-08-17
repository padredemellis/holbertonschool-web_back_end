#!/usr/bin/env python3
"""
 This function that returns the list of school having a specific topic
"""


def schools_by_topic(mongo_collection, topic):
    """
     This function that returns the list of school having a specific topic
     Args:
        mongo_collection will be the pymongo collection object
        topic (string) will be topic searched
    Returns:
        The list of school having a specific topic
    """
    schools = mongo_collection.find({"topics": topic})
    return list(schools)
