# NumberOnly4And7
Solve problem : number have only 4 and 7 with JavaScript

Long time ago, a king who interesting in number 4 and 7.
He told everybody to use only 4 and 7 for number system.
#### Let's create program to parse number from decimal to 4_7 number system !!



**Input**
> Receive N by 1 <= N <= 10^9



**Output**
> parsed number



**Example**

|Input  |Output           |
|:---:  |:---:            |
|1      |4                |
|2      |7                |
|3      |44               |
|4      |47               |
|5      |74               |
|6      |77               |
|7      |444              |
|8      |447              |
|10524  |4744744477747    |



**How to**


I try to parse value to binary.
and then check the last bit of binary.

If it equal to "1" then I will parse it to "4" and 
recursive this with value divide by 2 (same as shift right 1 time)

If it equal to "0", I will parse it to "7"
but I will subtract it by 1 before recursive same as above.


Ps. this is a one solution, you can use loop to solve that
but it will take a lot time to calculate this.



