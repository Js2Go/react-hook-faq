package main

import "fmt"

type T struct {
	Name string
}

func NewT(Name string) *T {
	return &T{Name: Name}
}

func main() {
	v1 := make([]int, 1, 5)
	v2 := make(map[int]bool, 5)
	v3 := make(chan int, 1)
	fmt.Println(v1, v2, v3)

	v := new(T)
	v.Name = "马子"
	fmt.Println(v)

	vv := T{}
	vv.Name = "马子乘以2"
	fmt.Println(vv)

	t := NewT("hhhhh")
	fmt.Println(t)
}
