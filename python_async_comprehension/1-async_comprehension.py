#!/usr/bin/env python3
'''
mport async_generator from the previous task
and then write a coroutine called
async_comprehension that takes no arguments.

The coroutine will collect 10 random numbers
using an async comprehensing over async_generator,
then return the 10 random numbers.
'''
from typing import List
import random
import _asyncio
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Esto es una funcion asincrona"""
    return [x async for x in async_generator()]
