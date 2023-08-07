# closure example

prefix = fn n -> (fn m -> n <> " " <> m end) end

IO.inspect(prefix.("mrs.").("donuts"))

Enum.map [1,2,3,4], &(&1 + 2)
Enum.map [1,2,3,4], IO.inspect(&1)

