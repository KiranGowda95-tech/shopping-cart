import {createContext} from 'react'
//import axios from 'axios'
const Cart=createContext()

const Context = ({children}) => {
    const products=[...Array()].map(()=>({
        id: faker.id,
        name: faker.name,
        price: faker.price,
        image:faker.random.image,
        //instock:faker.random.arrayElement([0,3,5,6,7]),
        //fastDelivery:faker.datatype.boolean(),
        //ratings:faker.random.arrayElement([1,2,3,4,5])

    }))
    console.log("products components from context",products)
  return (
    <Cart.Provider value={{}}>
      {children}
    </Cart.Provider>
  )
}

export default Context
