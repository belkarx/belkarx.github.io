# 24@h CTF Writeup
I admittedly did not put much effort into this CTF but it was fun nonetheless and writeups were spectacular (especially for pwn/reversing).

## Web
There was a flag in `robots.txt`

## Programming
### Challenge
> Can you detect fraud in bank transactions? Here is the problem: we have a dataset that contains 50 examples of transactions that are labeled according to whether they are fraud or not. For each of them, we will send you the list of features that we collected and its label.

> Here are the features we are talking about, in order:

> Amount of money being transferred Number of past failed transactions (originator account) Number of past failed transactions (destination account) Geographical distance between originator and destination Number of transactions per week (originator account) We will send you 10 new unlabeled transactions. Your goal is to detect which of them are fraud using the dataset as a reference. You have 10 seconds from when you receive the data to send back your answer.

### Approach
The presence of features and outputs immediately led me to machine learning as a potential solution, and I was reminded of [this article](https://iamtrask.github.io/2015/07/12/basic-python-network/) as it had a simple way to map a collection of numerical inputs to outputs. After trying to get the base code found there to work with the vectors available to me (I dumped them into a local text file so there was no latency from the server for experimentation), I realized 

1) I needed to normalize the values

   ```python
    norms = np.linalg.norm(inputs)
    inputs /= norms
   ``` 

2) The synapse (neural network weights) layer needed to be of a different size (initialized with a std-deviation of 1 and mean of 0 because apparently it's the most optimized way)

    ```python
    syn0 = 2*np.random.random((5,50)) - 1
    ```

I didn't manage to make this work, even though it should have, in theory. "`ValueError: non-broadcastable output operand with shape (5,1) doesn't match the broadcast shape (X,y)`" had me figuratively banging my head against my desk, as I tried changing values around.

I later recognized linear regression as a solution vector (though in hindsight I should have visualized the data first), and decided to have fun and try to implement it manually. While linear regression with a single input and output is simple, turns out it gets quite complicated with vectors. Long story short I couldn't force that to work either. 

So I gave in and used `scikit-learn`:

...

### Final Code
```python
from pwn import *
import re
from sklearn import linear_model
import numpy as np

conn = remote("0.cloud.chals.io", 32947)


while True:
    #absorb useless lines
    conn.recvline()
    conn.recvline()

    inputs = []
    outputs = []

    for x in range(50):
        line = conn.recvline().decode()
        #get all features
        inputs.append([int(y) for y in re.findall('[0-9]+', line)])
        #get dependent variable
        outputs.append(1 if line.split(": ")[-1].strip() == "yes" else 0)
    
    print("inputs")
    print(inputs)
    print()
    print("outputs")
    print(outputs)
    print()

    #absorb useless lines again
    conn.recvline()
    conn.recvline()

    test = []

    for x in range(10):
        line = conn.recvline().decode()
        test.append([int(y) for y in re.findall('[0-9]+', line[2:])])
    
    print("test")
    print(test)
    print()
    #does this only need to be done once?
    """
    CHANGE THIS
    """
    regr = linear_model.LinearRegression()
    regr.fit(np.array(inputs), np.array(outputs).T)

    results = []

    #gets the result, given a set of features from test
    for x in test:
        results.append(round(regr.predict(np.array(x).reshape((1, -1)))[0]))
    print("results")
    print(results)
    print()

    #idk if i need to absorb this but worth a shot since it's crashing right about here
    conn.recvline()
    #send!

    #hahhaaa turns out I need an array of the ones that are fraud
    
    answer = []

    for x in range(10):
        if results[x] == 1:
            answer.append(x)
    conn.sendline(str(answer))
    print(conn.recvline())
    print(conn.recvline())
    print(conn.recvline())
    print(conn.recvline())

```

### Results
`Good job! Here is your flag: FLAG{H0w_C4n_u_l34Rn_fr0m_ur_Mi5t4K3s_iF_u_c4nT_r3mEMb3r_Th3m}`
