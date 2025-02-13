//Task 5
// let orders = [
//     {id: 101, customer: "Alice", total:300},
//     {id: 102, customer: "Bob", total:450},
//     {id: 103, customer: "Charlie", total:200},
// ]

// function findOrder(orders, orderID){
//     return orders.find(order => order.id === orderID)

// }
// console.log(findOrder(orders, 102));
 
//Task 6

// let inventroy = {
//     items: [],
//     addItem(name, quantity) {
//         this.items.push({name, quantity});
//     },
//     removeLatestItem(){
//         this.items.pop();
//     },
//     removeFirstItem(){
//         this.items.shift();
//     },
// }
// inventroy.addItem("Monitor", 5);
// inventroy.addItem("Keybord", 10);
// inventroy.addItem("Mouse", 3);

// console.log(JSON.stringify(inventroy.items));
// inventroy.removeLatestItem();
// console.log(JSON.stringify(inventroy.items));
// inventroy.removeFirstItem();
// console.log(JSON.stringify(inventroy.items));

//Task 7
// let employees = [
//         { name: "Alice", position:"developer", salary:70000},
//         { name: "Bob", position: "designer", salary:60000},
//         { name: "Charlie", position:"manager", salary:9000},
//     ]

// function findemployee(employees, name){
//     return employees.find(employee => employee.name === name)
// }
// console.log(findemployee(employees, "Alice"));
//Task 8
// let orders1 = [{id: 1, customer: "Alice"}, {id:2, customer: "Bob"}];
// let orders2 = [{id:3, customer: "charlie"}, {id:4, customer: "David"}];

// function mergeOrders(orderA, orderB){
//     return [...orderA, ...orderB]
// }
// console.log(mergeOrders(orders1, orders2));

//Extra
let employee = {name:'Alice', position: "Developers", salary: 7000}

console.log(`${employee.name} is a ${employee.position} and makes $${employee.salary}`);
