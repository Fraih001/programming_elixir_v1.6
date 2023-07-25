# programming_elixir_v1.6

Chapter 1  
  
++ files ending in .ex are intended to be compiled into bytecodes and then run, whereas those ending in .exs are more like programs in scripting languages—they are effectively interpreted at the source level. When we come to write tests for our Elixir programs, you’ll see that the application files have .ex extensions, whereas the tests have .exs because we don’t need to keep compiled versions of the tests lying around.  
  
Chapter 2  
  
++ Elixir called the = sign the match operator  
++ Elixir will only change the value of a variable on the left side of an equals sign—on the right a variable is replaced with its value.  
  
Chapter 3  
  
++ In Elixir, due to data immutability, each process has it's own heap / garbage collection, making garbage collection must faster than in OOP languages  
  
Chapter 4  
  
++ ~r{} sigil + delimiters are used for regular expressions - page 27 & 28
++ a PID is a reference to a local or remote process and a port is a reference to a resource (typically external)  
++ PID of a current process is available by calling self  
++ the function make_ref create a globally unique reference where no other reference will be equal to it  
++ Maps allow only one entry for a particular key, whereas keyword lists allow the key to be repeated.    
++ There are two date/time types: DateTime and NaiveDateTime. The naive version contains just a date and a time; DateTime adds the ability to associate a time zone. The ~N[...] sigil constructs NaiveDateTime structs.  
++ with allows you to declare variables (that might have already been declared elsewhere) within the scope of the following do block  
  
Chapter 5  
  
++ 