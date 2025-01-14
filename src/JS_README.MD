onClick={() => increaseCount()} -> assigns a function as an event handler to onclick. The function's body has increaseCount() inside it. So when the function runs (on event trigger), increaseCount is executed/run.

onClick={increaseCount()} -> React runs increaseCount as soon as this code is encountered. increaseCount changes state and causes a re-render, and in the next render cycle same thing happens causing a cycle. This should have infinite renders.

onClick={() => increaseCount} -> Like the first one but here inside the function body, () is missing after increaseCount. This does not execute the function increaseCount when the event happens. A simple statement with function name without the parentheses will do nothing
