[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/-m0g1A8z)
# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

Number of Comparisons:

There are 2 for loops used, one is to find the max index in the given portion of the array 
and the other is used to continue the iteration of the entire array, so that the max values
can be placed at the end of each iteration. Since both for loops iterate over each value in 
an array, both loops take n time. Then, the max index loop is inside the for loop that iterates
over each element, because the findMaxIndex function is called inside the main for loop, which makes 
them nested for loops (n * n). So the asymptotic runtime for the number of comparisons is $\Theta(n^2)$.

Number of Flips:

Each element will have at most 2 flips, so one flip to get the element at the maxIndex
into the first element position, and then a second flip to flip the section of the array
that needs that element to the end. Since it will be each element, granted
there may be elements that are in the right position and flips aren't required, that requires
at most 2 flips, so we would have 2n, but constants aren't important asymptotically, so we can drop 
the 2, leaving n. Therefore, the asymptotic runtime for the number of flips is $\Theta(n)$.
