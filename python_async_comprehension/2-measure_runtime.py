#!/usr/bin/env python3
'''
Import async_comprehension from the previous file
and write a measure_runtime coroutine that will execute
async_comprehension four times in parallel using asyncio.gather.
measure_runtime should measure the total runtime and return it.
Notice that the total runtime is roughly 10 seconds,
explain it to yourself.
'''
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    '''Esta funcion calculta el tiempo
    de ejecucion de cuatro 
    corrutinas
    '''
    start = time.perf_counter()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension())
    end = time.perf_counter()
    return end - start
