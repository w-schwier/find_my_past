# Prime Multiplication Table Generator


### What is it?

This command line program prompts the user for how many primes they want in the table, the user has to input a whole number N, where is N is at least 1. The app when then calculate the first N primes, then generate and log to the console the resulting multiplication table.

### User Stories

As a user, to help me improve my maths skills, I want to be able to see a multiplication table of prime numbers.

As a user, so that I choose the number of primes shown, I want to be able to enter this information.

As a user, so that the returned data is easy to read, I want it a nice, neat table clearly showing the data.

### Installation and Running

Open up terminal, change to the directory you want the repo and type ```git clone https://github.com/w-schwier/find_my_past```

Change into the directory using: ```cd find_my_past```

To run this application you will need node installed on your machine; if you don't, you can find instructions [here](https://nodejs.org/en/download/package-manager/#macos).

Next type ```npm install```

In the command line, run the app by typing ```node index.js```

You will then be prompted to enter a value for N, number of primes: enter a whole number that's at least 1.

If you fail to enter a valid value for N you will be prompted to enter another value:

![invalid_entry](screenshots/invalid_entry.png)

N.b To exit out the program you can press ```control``` + ```c```

Tests can be run/viewed by visiting the path of the specRunner.html in a browser, then open the console in the developers tools, this can be done by holding ```option``` + ```command```+ ```i```. E.g. /Users/name/path/to/file/find_my_past/SpecRunner.html

### My Approach

All the above was achieved using TDD to structure the code.

### Challenges and Success

Although the prime number generator can work beyond 20,000 numbers, the table generator can only handle 8,000 slowly. Another limitation is logging to the console as it only displays the table in a nice format up to a very small size.

### Future Improvements

The console severely limits the size you can print a nicely formatted table. To address this the table could be either written to a document or onto a webpage. I also believe running the app in the console limits the memory, this coupled with the power of Chromes' V8 engine would increase speed and capability of the program.
